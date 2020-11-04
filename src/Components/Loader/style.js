import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
}))
