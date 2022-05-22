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
