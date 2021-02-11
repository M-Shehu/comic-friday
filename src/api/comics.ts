import axios from "axios";
const COMICS_END_POINT = `${process.env.REACT_APP_API_URL}/comics-collections`;

export function fetchComicsCount() {
  return axios.get(`${COMICS_END_POINT}/count`).then(({ data }) => data);
}

export function fetchComicsPage(start: number = 1) {
  return axios
    .get(COMICS_END_POINT, {
      params: { _limit: 3, _start: start, _sort: "date:DESC" },
    })
    .then(({ data }) => data);
}

export function fetchComicPick(slug: string) {
  return axios
    .get(COMICS_END_POINT, { params: { slug } })
    .then(({ data }) => data);
}
