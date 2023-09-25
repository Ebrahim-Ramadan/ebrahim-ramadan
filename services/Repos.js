

export const getDataFromGithub = async (username) => {
console.log(gg);
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_BAT_ACCESS_TOKEN}`, //publicRuntimeConfig.GH_API_KEY
      },
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to fetch data from GitHub");
  }
};
