export const getDataFromGithub = async (username) => {
  const bat='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'
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${bat}`,
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