import {GH_API_KEY} from '@/keys'
export const getDataFromGithub = async (username) => {

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${GH_API_KEY}`, //publicRuntimeConfig.GH_API_KEY
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
