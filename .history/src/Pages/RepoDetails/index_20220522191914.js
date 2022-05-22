import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosGithubSingleRepoInstance } from "../../Utilities/axiosInstance";
import { useQuery } from "react-query";
import { RepoCard, RepoContributors } from "../../Components";
import axios from "axios";

export default function Index() {
  const [repoContributors, setRepoContributors] = useState([]);
  const { repo, owner } = useParams();

  const HandleFetchRepo = () => {
    return axiosGithubSingleRepoInstance.get(`/${owner}/${repo}`);
  };

  const { data, error, isFetching } = useQuery(
    "getRepo",

    HandleFetchRepo
  );

  let contributorsData = [];
  useEffect(() => {

    const fetchContributors = async () => {
   

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
      }
  
  }, [data]);

  console.log(repoContributors, "fwjee");
  return (
    <div>
      <RepoCard data={data?.data} isFetching={isFetching} error={error} />

      {data?.data && <RepoContributors data={repoContributors} />}
    </div>
  );
}
