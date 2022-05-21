import React, { useState } from "react";
import { CustomInput } from "../../Components/";
import { useQuery } from "react-query";
import { UsersCard } from "../../Components";
import { axiosGithubUsersInstance } from "../../Utilities/axiosInstance";
function Index() {
  const [value, setValue] = useState("");

  const HandleFetchUsers = () => {
    return axiosGithubUsersInstance.get(`/users?q=${value}`);
  };

  const { data, error, isLoading, refetch, isFetching } = useQuery(
    "searchUsers",
    HandleFetchUsers,
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
          placeholder={"Search Github Users"}
          searchBtnText={"Search Users"}
          refetch={refetch}
        />
      </div>

      <UsersCard
        data={data?.data?.items}
        isFetching={isFetching}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}

export default Index;
