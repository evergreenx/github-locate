import { useParams } from "react-router-dom";
import { axiosGithubSingleRepoInstance } from "../../Utilities/axiosInstance";
import { useQuery } from "react-query";
import { RepoCard, RepoContributors } from "../../Components";
import axios 

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

  const HandleFetchContributors = () => {
    return axios.get();
  };


  console.log(repoContributorsUrl , 'url');
  const {
    data: contributorsData,
    isFetching: isFetchingContributors,

    error: contributorsError,
  } = useQuery(
    "getContributors",

    HandleFetchContributors
  );

  return (
    <div>
      <RepoCard data={data?.data} isFetching={isFetching} error={error} />

      <RepoContributors
        data={contributorsData}
        isFetching={isFetchingContributors}
        error={contributorsError}
      />
    </div>
  );
}
