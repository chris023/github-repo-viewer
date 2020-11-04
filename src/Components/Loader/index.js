import React, { useEffect, useState } from 'react'

import { MetroSpinner } from 'react-spinners-kit'
import { useTheme } from '@material-ui/core'

import { useStyles } from './style'

const GenericLoader = ({ debounceTime = 1500 }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [delay, setDelay] = useState(true)

  useEffect(() => {
    let mounted = true
    setTimeout(() => {
      if (mounted) setDelay(false)
    }, debounceTime)

    return () => (mounted = false)
  }, [setDelay, debounceTime])

  if (delay) return null

  return (
    <div className={classes.root}>
      <MetroSpinner size={30} color={theme.palette.primary.main} />
    </div>
  )
}

export { GenericLoader }
