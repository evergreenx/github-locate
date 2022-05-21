import React, { useState } from "react";
import { CustomInput } from "../../Components/";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
function Index() {
  const [value, setValue] = useState("evergreenx");



  // const [searchRepos, { data, error, isLoading }] = useQuery(
  //   "searchRepos",
  //   async () => {
  //     const response = await axios(`https://api.github.com/users/${value}`);

  //     return response;
  //   }
  // );

  // console.log(data);

  return (
    <>
      <form>
        <div className="flex items-center justify-center">
          <CustomInput
            onChange={(e) => {
              setValue(e.target.value);
              console.log(e.target.value);
            }}
            value={value}
            placeholder={"Search Github Users"}
          />

          <button
            type="submit"
            className="bg-slate-100 p-3 w-full outline-none"
            // onClick={handleClick}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default Index;
