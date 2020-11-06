import { useContext } from 'react'

import { CustomHookContext } from './context'

const useCustomHook = () => useContext(CustomHookContext)

export { useCustomHook }
