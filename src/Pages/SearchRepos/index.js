import React, { useState } from "react";
import { CustomInput } from "../../Components/";
// import { UserCard } from "../../Components";
import { axiosGithubSearchInstance } from "../../Utilities/axiosInstance";
import { useQuery } from "react-query";
import { ReposCard } from "../../Components";
function Index() {
  const [value, setValue] = useState("");

  // handle fetching of repos based on input
  const HandleFetchRepos = () => {
    return axiosGithubSearchInstance.get(`/repositories?q=${value}`);
  };

  const { data, error, isLoading, refetch, isFetching } = useQuery(
    "searchRepos",
    HandleFetchRepos,
    {
      enabled: false,
    }
  );
  return (
    <>
      <div className="flex items-center justify-center">
        <CustomInput
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          placeholder={"Search Github repos"}
          searchBtnText={"Search repos"}
          refetch={refetch}
        />
      </div>

      <ReposCard
        data={data?.data?.items}
        isFetching={isFetching}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}

export default Index;
