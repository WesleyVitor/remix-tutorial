import { Repositories } from "../Github.types";
import { Link } from "remix";
export interface RepositoryProps {
  repo: Repositories.Repo;
}

export const Repository = ({ repo }: RepositoryProps) => {
  return (
    <li key={repo.id} className="item">
      <div className="info">
        <Link to={repo.name}>
          <p>{repo.full_name}</p>
        </Link>

        <a href={repo.html_url}>Visite no site</a>
      </div>

      <p>
        Linguagem utilizada: <span>{repo.language}</span>
      </p>
    </li>
  );
};
