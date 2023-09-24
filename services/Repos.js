export const getDataFromGithub = async (username) => {
  const bat=process.env.GH_BAT_API_KEY
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.GH_BAT_API_KEY}`,
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