import React from "react";
import { GrSearchAdvanced } from "react-icons/gr";

function index({ onChange, value, placeholder, searchBtnText, refetch }) {
  return (
    <div className="bg-slate-100  rounded-full flex items-center shadow-lg px-3.5 my-7">
      <div className=" flex items-center p-2">
        <GrSearchAdvanced className="text-3xl" />
        <input
          type="text"
          className=" bg-slate-100 p-3 w-full outline-none"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>

      <button
        className="bg-zinc-900 p-3 text-white font-extrabold rounded-full outline-none"
        onClick={refetch}
      >
        {searchBtnText}
      </button>
    </div>
  );
}

export default index;
