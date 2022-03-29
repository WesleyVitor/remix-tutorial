import { Repository, User } from "./types";
import { Outlet } from "remix";
export interface GithubContainerProps {
  user: User;
  repos: Repository[];
}

export function GithubContainer({ user, repos }: GithubContainerProps) {
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
            <li key={repo.id} className="item">
              <div className="info">
                <p>{repo.full_name}</p>
                <a href={repo.html_url}>Visite no site</a>
              </div>

              <p>
                Linguagem utilizada: <span>{repo.language}</span>
              </p>
            </li>
          ))}
        </ul>
      </main>
      <aside className="commits">Commits</aside>

      <Outlet />
    </div>
  );
}
