import { User } from "./types";
import { Outlet } from "remix";
export interface GithubContainerProps {
  user: User;
}

export function GithubContainer({ user }: GithubContainerProps) {
  return (
    <div className="container">
      <header className="profile">
        <img src={user.avatar_url} alt={user.login} />
        <h3>{user.login}</h3>
      </header>
      <main className="repositories">Repos</main>
      <aside className="commits">Commits</aside>

      <hr />
      <Outlet />
    </div>
  );
}
