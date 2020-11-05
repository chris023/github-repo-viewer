import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  checkIcon: {
    marginRight: theme.spacing(1),
  },
  list: {
    width: '100%',
    maxWidth: 140,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    minWidth: 180,
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItemSelected: {
    backgroundColor: '#0003',
  },
}))
