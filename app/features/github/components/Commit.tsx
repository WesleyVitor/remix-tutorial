import { Commits, User } from "../Github.types";

export interface CommitProps {
  user: User;
  commit: Commits.Commit;
}

export const Commit = ({ user, commit }: CommitProps) => {
  return (
    <li>
      <img
        className="avatarCommit"
        src={user.avatar_url}
        alt={user.login}
        width="50"
      />
      <p className="message">{commit.message}</p>
    </li>
  );
};
