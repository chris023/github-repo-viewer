const config = {
  baseurl: 'https://api.github.com/search/repositories',
}

const searchGithubRepos = (query) => {
  if (!query?.length) {
    throw new Error('Query string required')
  }

  let url = `${config.baseurl}?q=${query}`

  return fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/vnd.github.v3+json',
    },
  })
}

export { searchGithubRepos }
