import { LoaderFunction, useLoaderData } from "remix";
import type { LinksFunction } from "remix";
import { GithubApi, LoadData, GithubContainer } from "~/features/github";
import githubContainerStyles from "~/styles/githubContainerStyles.css";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await GithubApi.getGithubUser(params.username),
    repos: await GithubApi.getGithubRepos(params.username),
  };
};

export function ErrorBoundary() {
  return <h3>Woops...</h3>;
}
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: githubContainerStyles,
    },
  ];
};
export default function () {
  const { user, repos } = useLoaderData<LoadData>();

  return <GithubContainer user={user} repos={repos} />;
}
