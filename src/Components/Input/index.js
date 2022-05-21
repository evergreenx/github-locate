import React from "react";
import { GrSearchAdvanced } from "react-icons/gr";

function index({ onChange, value, placeholder }) {
  return (
    <div className="bg-slate-100 p-4 rounded-lg w-2/4  flex items-center shadow-lg my-7">
      <GrSearchAdvanced className="text-3xl" />
      <input
        type="text"
        className=" bg-slate-100 p-3 w-full outline-none"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default index;
