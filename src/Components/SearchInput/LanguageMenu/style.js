import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 80,
    marginRight: theme.spacing(1),
  },
  listItemIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: 24,
    marginLeft: 2,
  },
}))
