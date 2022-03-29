import invariant from "tiny-invariant";
import { Repository } from "./types";

const config = {
  headers: {
    Accept: "application/vnd.github.v3+json",

    Authorization: `token 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`,
  },
};

export const getGithubUser = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(`https://api.github.com/users/${username}`, config);

  const { login, html_url, bio, avatar_url } = await res.json();

  return { login, html_url, bio, avatar_url };
};

export const getGithubRepos = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(
    `https://api.github.com/users/${username}/repos`,
    config
  );

  return (await res.json()).map(
    ({ id, name, full_name, html_url, language }: Repository) => ({
      id,
      name,
      full_name,
      html_url,
      language,
    })
  );
};
