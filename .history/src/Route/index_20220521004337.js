import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SearchUsers from "../Pages/Se";
import SearchRepos from "../Pages/SearchRepos";

export default function index() {
  return (
    <Routes>
      <Route path="/" index element={<Home />}>
        {" "}
      </Route>
      <Route path="users" element={<SearchUsers />}></Route>
      <Route path="repos" element={<SearchRepos />}></Route>
    </Routes>
  );
}
