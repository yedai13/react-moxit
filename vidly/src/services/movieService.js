import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoind = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoind);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoind + "/" + movieId);
}
