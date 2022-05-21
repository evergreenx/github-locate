import axios from "axios";
// axios instance
const axiosGithubUserInstance = axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const axiosGithubRepoInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { axiosGithubUserInstance, axiosGithubRepoInstance };
