import { useContext } from 'react'

import { CustomHookContext } from './context'

const useGlobalState = () => useContext(CustomHookContext)

export { useGlobalState }
