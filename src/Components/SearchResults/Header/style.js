import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    padding: theme.spacing(1),
  },
  subheader: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
}))
