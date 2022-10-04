import { Repository, RepositoryApi } from "../types/Repository";

const getApiRepositories = (userName: string): Promise<Repository[]> => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo: RepositoryApi): Repository => {
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
        };
      });
    });
};

export default getApiRepositories;
