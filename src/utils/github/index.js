import React from 'react'

import ArrowIcon from '@material-ui/icons/ArrowRightAlt'

const config = {
  baseurl: 'https://api.github.com/search/repositories',
}

const searchGithubRepos = ({ search, language, page, pageSize, sort }) => {
  if (!search?.length) {
    throw new Error('Query string required')
  }

  let url = `${config.baseurl}?q=${search}`

  if (language?.length && language !== 'All') {
    url += '+language:' + language.toLowerCase()
  }

  if (sort?.value?.length && sort !== 'best-match') {
    url += sort.value
  }

  if (page) url += `&page=${page}`
  if (pageSize) url += `&per_page=${pageSize}`

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
    value: '&sort=stars&order=desc',
  },
  {
    display: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Stars <ArrowIcon style={{ transform: 'rotate(270deg)' }} />
      </div>
    ),
    value: '&sort=stars&order=asc',
  },
]

export { searchGithubRepos, sortMethods }
