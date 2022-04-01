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

export namespace Commits {
  export interface apiResponse {
    sha: string;
    commit: {
      message: string;
    };
    html_url: string;
  }

  export interface Commit {
    sha: string;
    message: string;
    html_url: string;
  }
  export interface LoadData {
    user: User;
    commits: Commit[];
  }
}
