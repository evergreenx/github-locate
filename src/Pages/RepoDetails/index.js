import React from "react";
import { useParams } from "react-router-dom";
import { axiosGithubSingleRepoInstance } from "../../Utilities/axiosInstance";
import { useQuery } from "react-query";
import { RepoCard } from "../../Components";

export default function Index() {
  const { repo, owner } = useParams();

  const { user } = useParams();

  const HandleFetchRepo = () => {
    return axiosGithubSingleRepoInstance.get(`/${owner}/${repo}`);
  };

  const { data, error, isFetching } = useQuery("getRepo", HandleFetchRepo);

  return (
    <div>
     

      <RepoCard data={data?.data} isFetching={isFetching} error={error} />
    </div>
  );
}
