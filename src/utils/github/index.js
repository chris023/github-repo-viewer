import React from 'react'

import ArrowIcon from '@material-ui/icons/ArrowRightAlt'

const config = {
  baseurl: 'https://api.github.com/search/repositories',
}

const searchGithubRepos = ({ query, language }) => {
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

const sortMethods = [
  {
    display: <>Best Match</>,
    value: '&sort=best-match',
  },
  {
    display: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Stars <ArrowIcon style={{ transform: 'rotate(90deg)' }} />
      </div>
    ),
    value: '&sort=stars&order=asc',
  },
  {
    display: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Stars <ArrowIcon style={{ transform: 'rotate(270deg)' }} />
      </div>
    ),
    value: '&sort=stars&order=desc',
  },
]

export { searchGithubRepos, sortMethods }
