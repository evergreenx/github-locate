import { useState , useEffect } from "react";
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
  
 }, [])
 
 


  console.log(repoContributors , 'fwjee');
  return (
    <div>
      <RepoCard data={data?.data} isFetching={isFetching} error={error} />

      {data?.data && <RepoContributors data={contributorsData} />}
    </div>
  );
}
