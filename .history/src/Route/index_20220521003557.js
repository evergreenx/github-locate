import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetails";
import PageNotFound from "../Pages/404Page";

export default function index() {
  return (
    <Routes>
      <Route path="/" index element={<Home />}>
        {" "}
      </Route>
      <Route path="movie/:id" element={<MovieDetails />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}
