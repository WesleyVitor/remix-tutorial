export interface User {
  login: string;
  html_url: string;
  bio: string;
  avatar_url: string;
}

export interface LoadData {
  user: User;
}
