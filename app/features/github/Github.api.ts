import invariant from "tiny-invariant";
import pick from "lodash/pick";
import { Repositories } from "./Github.types";
import "dotenv/config";

const config = {
  headers: {
    Accept: "application/vnd.github.v3+json",

    Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
  },
};

export const getGithubUser = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(`https://api.github.com/users/${username}`, config);

  return pick(await res.json(), ["login", "html_url", "bio", "avatar_url"]);
};

export const getGithubRepos = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(
    `https://api.github.com/users/${username}/repos`,
    config
  );

  return (await res.json()).map((repo: Repositories.Repo) =>
    pick(repo, ["id", "name", "full_name", "html_url", "language"])
  );
};

export const getCommits = async (reponame?: string, username?: string) => {
  invariant(reponame, "Please provide an repo name as a string");
  invariant(username, "Please provide an user name as a string");

  const res = await fetch(
    `https://api.github.com/repos/${username}/${reponame}/commits`,
    config
  );

  return await res.json();
};
