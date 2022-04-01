import { LinksFunction, LoaderFunction, useLoaderData } from "remix";

import { GithubApi } from "~/features/github";
import { Commit } from "~/features/github/components/Commit";
import { Commits } from "~/features/github/Github.types";

import commitStyles from "~/styles/commitStyles.css";
export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await GithubApi.getGithubUser(params.username),
    commits: await GithubApi.getCommits(params.reponame, params.username),
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: commitStyles,
    },
  ];
};

export default function () {
  const { user, commits } = useLoaderData<Commits.LoadData>();

  return (
    <ul className="listCommits">
      {commits.map((commit) => (
        <Commit user={user} commit={commit} key={commit.sha} />
      ))}
    </ul>
  );
}
