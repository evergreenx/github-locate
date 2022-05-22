import { useParams } from "react-router-dom";
import { axiosGithubSingleRepoInstance } from "../../Utilities/axiosInstance";
import { useQuery } from "react-query";
import { RepoCard, RepoContributors } from "../../Components";
import axios from "axios";

export default function Index() {
  const { repo, owner } = useParams();

  const HandleFetchRepo = () => {
    return axiosGithubSingleRepoInstance.get(`/${owner}/${repo}`);
  };

  const { data, error, isFetching } = useQuery(
    "getRepo",

    HandleFetchRepo
  );

  let repoContributorsUrl = [];

  repoContributorsUrl = data?.data.contributors_url;

  let contributorsData = [];

  const options = {
    url: "http://localhost:3000/api/home",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      name: "David",
      age: 45,
    },
  };

  axios(options).then((response) => {
    console.log(response.status);
  });


  axios.get(repoContributorsUrl).then((res) => {
    console.log(res.data);
    contributorsData = res.data;
  });

  return (
    <div>
      <RepoCard data={data?.data} isFetching={isFetching} error={error} />

      <RepoContributors data={contributorsData} />
    </div>
  );
}
