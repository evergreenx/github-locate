import React, { useState } from "react";
import { CustomInput } from "../../Components/";
function Index() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="flex items-center justify-center">
        <CustomInput
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
          value={value}
          placeholder={"Search Github repos"}
        />
      </div>
    </>
  );
}

export default Index;
