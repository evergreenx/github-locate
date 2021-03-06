import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosGithubSingleRepoInstance } from "../../Utilities/axiosInstance";
import { useQuery } from "react-query";
import { RepoCard, RepoContributors } from "../../Components";
import axios from "axios";

export default function Index() {
  const [repoContributors, setRepoContributors] = useState([]);
  const { repo, owner } = useParams();

  // handle fetching of repo based on params
  const HandleFetchRepo = () => {
    return axiosGithubSingleRepoInstance.get(`/${owner}/${repo}`);
  };

  const { data, error, isFetching } = useQuery(
    "getRepo",

    HandleFetchRepo
  );
  //

  useEffect(() => {
    const fetchContributors = () => {
      if (data) {
        let repoContributorsUrl = [];

        repoContributorsUrl = data?.data.contributors_url;

        const options = {
          url: repoContributorsUrl,
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        };

        axios(options).then((response) => {
          console.log(response.data);
          setRepoContributors(response.data);
        });
      }
    };

    fetchContributors();
  }, [data]);

  return (
    <div>
      <RepoCard data={data?.data} isFetching={isFetching} error={error} />
      <RepoContributors data={repoContributors} />
    </div>
  );
}
