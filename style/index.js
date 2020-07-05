import { makeStyles } from '@material-ui/core/styles'

export const Body = makeStyles(theme => ({
    wrapper: {
        background: theme.body.background
    }
}))

export const Leftbar = makeStyles(theme => ({
    wrapper: {
        color: theme.body.color,
        background: theme.leftbar.background
    }
}))

export const Center = makeStyles(theme => ({
    wrapper: {
        color: theme.body.color,
        background: theme.center.background
    }
}))

export const Rightbar = makeStyles(theme => ({
    wrapper: {
        color: theme.body.color,
        background: theme.rightbar.background
    }
}))

export const Topbar = makeStyles(theme => ({
    wrapper: {
        color: theme.body.color,
        background: theme.topbar.background,
        '& a': {
            color: theme.leftbar.color,
        }
    }
}))