
const axios = require('axios');
const githubToken = 'YOUR_PERSONAL_ACCESS_TOKEN';
const repositoryOwner = 'github_username';
const repositoryName = 'repository_name';
async function getChangelogData() {
try {
const response = await axios.get(https://api.github.com/repos/${repositoryOwner}/${repositoryName}/releases, {
headers: {
Authorization: token ${githubToken},
},
});
// Handle the response data here
console.log(response.data);
} catch (error) {
console.error('Error fetching data from GitHub API:', error);
}
}
getChangelogData();