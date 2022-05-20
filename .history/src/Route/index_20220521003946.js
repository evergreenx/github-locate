import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SearchUsers from "../Pages/SearchUsers";

// import PageNotFound from "../Pages/404Page";

export default function index() {
  return (
    <Routes>
      <Route path="/" index element={<Home />}>
        {" "}
      </Route>
      <Route path="users" element={<SearchUsers />}></Route>

      {/* <Route path="*" element={<PageNotFound />}></Route> */}
    </Routes>
  );
}
