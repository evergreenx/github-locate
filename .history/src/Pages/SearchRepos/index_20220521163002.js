import React, { useState } from "react";
import { CustomInput } from "../../Components/";
// import { UserCard } from "../../Components";
function Index() {
  const [value, setValue] = useState("");
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
        />
      </div>

      {}

      {/* <UserCard /> */}
    </>
  );
}

export default Index;
