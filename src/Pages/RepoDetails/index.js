import React from "react";
import { useParams } from "react-router-dom";
import { axiosGithubSingleRepoInstance } from "../../Utilities/axiosInstance";
import { useQuery } from "react-query";

export default function Index() {
  const { repo, owner } = useParams();

  const { user } = useParams();

  const HandleFetchRepo = () => {
    return axiosGithubSingleRepoInstance.get(`/${owner}/${repo}`);
  };

  const { data, error, isFetching } = useQuery("getRepo", HandleFetchRepo);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.data.name}</h1>
          <h1>{data.data.owner.login}</h1>
        </div>
      )}
    </div>
  );
}
