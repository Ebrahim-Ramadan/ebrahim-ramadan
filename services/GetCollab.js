export const GetCollab = async (owner, repo) => {
  const bat='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'

    const response = await fetch(
      `https://api.github.com/users/${owner}/${repo}/collaborators`,
      {
        headers: {
          Authorization: `token ${bat}`,
          'X-GitHub-Api-Version': '2022-11-28'
        },
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch collaborators from GitHub");
    }
  };
  