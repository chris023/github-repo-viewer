import React, { useState } from 'react'

import { CustomHookContext } from '../context'
import { state as defaultState } from '../state'

const CustomHookProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)

  const setResults = (callback) =>
    setState((prev) => ({ ...prev, results: callback(prev.results) }))

  const setQuery = (callback) =>
    setState((prev) => ({ ...prev, query: callback(prev.query) }))

  return (
    <CustomHookContext.Provider
      value={{
        results: state.results,
        query: state.query,
        setResults,
        setQuery,
      }}
    >
      {children}
    </CustomHookContext.Provider>
  )
}

export { CustomHookProvider }
