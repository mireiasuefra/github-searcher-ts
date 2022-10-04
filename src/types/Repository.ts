export interface Repository {
  id: number;
  name: string;
  description: string;
  url: string;
}

export interface RepositoryApi {
  id: number;
  node_id: string;
  name: string;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
}
