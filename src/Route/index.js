import { Routes, Route } from "react-router-dom";
import SearchUsers from "../Pages/SearchUsers";
import SearchRepos from "../Pages/SearchRepos";
import UsersDetails from "../Pages/UsersDetails";
import RepoDetails from "../Pages/RepoDetails";

export default function index() {
  return (
    <Routes>
      <Route path="/" index element={<SearchUsers />}></Route>
      <Route path="repos" element={<SearchRepos />}></Route>
      <Route path="users/:user" element={<UsersDetails />}></Route>
      <Route path="repos/:owner/:repo" element={<RepoDetails />}></Route>
    </Routes>
  );
}
