import React from "react";
import { useParams } from "react-router-dom";
import { axiosGithubUserInstance } from "../../Utilities/axiosInstance";

import { useQuery } from "react-query";
import { UserCard } from "../../Components";

function Index() {
  const { user } = useParams();

  const HandleFetchUser = () => {
    return axiosGithubUserInstance.get(`/${user}`);
  };

  const { data, error, isFetching } = useQuery("getUser", HandleFetchUser);

  return (
    <div>
   
      <UserCard data={data?.data} isFetching={isFetching} error={error} />
    </div>
  );
}

export default Index;
