import { sortMethods } from '../..'

const state = {
  query: {
    search: '',
    language: 'All',
    page: 1,
    pageSize: 10,
    sort: sortMethods[0],
  },
  results: {
    loading: false,
    error: false,
    data: undefined,
  },
}

export { state }
