import { Routes, Route } from "react-router-dom";
import SearchUsers from "../Pages/SearchUsers";
import SearchRepos from "../Pages/SearchRepos";
import UsersDetails from "../Pages/UsersDetails";

export default function index() {
  return (
    <Routes>
      <Route path="/" index element={<SearchUsers />}></Route>
      <Route path="repos" element={<SearchRepos />}></Route>
      <Route path="users/:user" element={<UsersDetails />}></Route>
    </Routes>
  );
}
