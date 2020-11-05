import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    marginTop: theme.spacing(2),
    maxWidth: 600,
    width: '100%',
  },
  list: {
    width: '100%',
    overflow: 'hidden',
  },
  listItemPrimary: {
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItemPrimaryStar: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  listItemPrimaryStarText: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
  },
  listItemPrimaryText: {
    wordWrap: 'break-word',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}))
