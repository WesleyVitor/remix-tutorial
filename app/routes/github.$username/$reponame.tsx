import { LoaderFunction, useLoaderData } from "remix";

import { GithubApi } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return await GithubApi.getCommits(params.reponame, params.username);
};

export default function () {
  //const { reponame } = useLoaderData();

  return <p>reponame</p>;
}
