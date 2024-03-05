async function importChangelogData() {
  const githubData = await getChangelogData();
  for (const release of githubData) {
    // Map GitHub data to Changelog content type fields
    const changelogEntry = {
      releaseDate: release.published_at,
      description: release.body,
      author: release.author.login,
    };
    try {
      // Create a new Changelog entry in Strapi
      const createdChangelogEntry = await strapi.services.changelog.create(
        changelogEntry
      );
      console.log("Changelog entry created:", createdChangelogEntry);
    } catch (error) {
      console.error("Error creating Changelog entry:", error);
    }
  }
  console.log("Changelog data imported successfully.");
}
importChangelogData();
