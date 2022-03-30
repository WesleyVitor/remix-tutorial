import { Repositories, User } from "../Github.types";
import { Outlet } from "remix";
import { Repository } from "./Repository";
export interface GithubContainerProps {
  user: User;
  repos: Repositories.Repo[];
}

export function Repositories({ user, repos }: GithubContainerProps) {
  return (
    <div className="container">
      <header className="profile">
        <img src={user.avatar_url} alt={user.login} />
        <span>{user.login}</span>
      </header>
      <main className="repositories">
        <h3>Projects</h3>
        <ul>
          {repos.map((repo) => (
            <Repository repo={repo} key={repo.id} />
          ))}
        </ul>
      </main>
      <aside className="commits">
        Commits
        <Outlet />
      </aside>
    </div>
  );
}
