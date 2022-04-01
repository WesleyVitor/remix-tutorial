import { LoaderFunction, useLoaderData } from "remix";
import type { LinksFunction } from "remix";
import { GithubApi, Types, Repositories } from "~/features/github";
import repositoriesStyles from "~/styles/repositoriesStyles.css";

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
      href: repositoriesStyles,
    },
  ];
};
export default function () {
  const { user, repos } = useLoaderData<Types.Repositories.LoadData>();

  return <Repositories user={user} repos={repos} />;
}
