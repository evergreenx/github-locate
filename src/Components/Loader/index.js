import React from "react";
import GithubImage from "../../Assets/iconmonstr-github-1-240.png";

function index() {
  return (
    <div className="animate-pulse flex items-center justify-center">
      <img src={GithubImage} alt="github" />
    </div>
  );
}

export default index;
