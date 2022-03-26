import { User } from "./types";
import { Outlet } from "remix";
export interface GithubContainerProps {
  user: User;
}

export function GithubContainer({ user }: GithubContainerProps) {
  return (
    <header className="header">
      <h1>{user.login}</h1>
      <h2>{user.bio}</h2>
      <img src={user.avatar_url} alt={user.login} width="150" />
      <hr />
      <Outlet />
    </header>
  );
}
