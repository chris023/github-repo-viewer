const config = {
  baseurl: 'https://api.github.com/search/repositories',
}

const searchGithubRepos = (query, language) => {
  if (!query?.length) {
    throw new Error('Query string required')
  }

  let url = `${config.baseurl}?q=${query}`

  if (language?.length && language !== 'All') {
    url += '+language:' + language.toLowerCase()
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/vnd.github.v3+json',
    },
  })
}

export { searchGithubRepos }
