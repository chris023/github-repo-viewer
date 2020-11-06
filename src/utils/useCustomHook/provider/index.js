import React from 'react'

import { CustomHookContext } from '../context'

const CustomHookProvider = ({ children, hook }) => {
  return (
    <CustomHookContext.Provider value={hook}>
      {children}
    </CustomHookContext.Provider>
  )
}

export { CustomHookProvider }
