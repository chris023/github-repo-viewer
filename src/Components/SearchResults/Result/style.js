import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
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
}))
