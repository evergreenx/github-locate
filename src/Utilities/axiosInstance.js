import axios from "axios";
// axios instance
const axiosGithubSearchInstance = axios.create({
  baseURL: "https://api.github.com/search/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const axiosGithubUserInstance = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const axiosGithubSingleRepoInstance = axios.create({
  baseURL: "https://api.github.com/repos/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export {
  axiosGithubUserInstance,
  axiosGithubSearchInstance,
  axiosGithubSingleRepoInstance,
};
