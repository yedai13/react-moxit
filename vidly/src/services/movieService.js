import http from "./httpService";

const apiEndpoind = "http://localhost:3900/api/movies";

export function getMovies() {
  return http.get(apiEndpoind);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoind + "/" + movieId);
}
