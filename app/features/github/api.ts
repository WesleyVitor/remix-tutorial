import invariant from "tiny-invariant";
export const getGithubUser = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",

      Authorization: `token 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`,
    },
  });

  const { login, html_url, bio, avatar_url } = await res.json();

  return { login, html_url, bio, avatar_url };
};
