import React, { useState } from "react";
import { CustomInput } from "../../Components/";
import useSWR from "swr";
function Index() {
  const [value, setValue] = useState("evergreenx");
  const [shouldFetch, setShouldFetch] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, mutate } = useSWR(
    shouldFetch ? null : `https://api.github.com/users/${value}`,

    fetcher
  );
  function handleClick() {
    setShouldFetch(true);
  }
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
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
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default Index;
