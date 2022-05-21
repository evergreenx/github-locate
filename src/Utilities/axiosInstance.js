import axios from "axios";
// axios instance
const axiosGithubUsersInstance = axios.create({
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

const axiosGithubRepoInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { axiosGithubUserInstance, axiosGithubUsersInstance, axiosGithubRepoInstance };
