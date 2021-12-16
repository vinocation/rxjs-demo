import { fromFetch } from "rxjs/fetch";

// 创建一个 ajax 的 promise
const getReposPromise = (query) => {
  const searchURL =
    "https://api.github.com/search/repositories?sort=stars&order=desc&q=";
  return fetch(`${searchURL}${query}`);
};

// 通过 fromPromise 创建一个 Observable
export const getRepos = (query) => {
  const promise = getReposPromise(query);
  return fromFetch(promise);
};
