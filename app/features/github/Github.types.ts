export interface User {
  login: string;
  html_url: string;
  bio: string;
  avatar_url: string;
}

export namespace Repositories {
  export interface Repo {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    language: string;
  }

  export interface LoadData {
    user: User;
    repos: Repo[];
  }
}
