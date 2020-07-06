// core
import { Fragment } from 'react'
// library
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, Button, colors } from '@material-ui/core'
// components
import { NextLink } from '../../../../../../components'

const useStyles = makeStyles(theme => ({
    root: {},
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main
        }
    }
}))

export default props => {
    const { pages, className, ...rest } = props
    const classes = useStyles()

    return (
        <List
            {...rest}
            className={className}
        >
            {pages.map(page => (
                <ListItem
                    className={classes.item}
                    disableGutters
                    key={page.title}
                >
                    <div style={{ flexGrow: 1 }} >
                        <NextLink activeClassName="active" href={page.href}>
                            <Button
                                activeClassName={classes.active}
                                className={classes.button}
                            >
                                <Fragment>
                                    <div className={classes.icon}>{page.icon}</div>
                                    {page.title}
                                </Fragment>
                            </Button>
                        </NextLink>
                    </div>
                </ListItem>
            ))}
        </List>
    )
}