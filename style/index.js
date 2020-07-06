import { makeStyles } from '@material-ui/core/styles'

export const Body = makeStyles(theme => ({
    wrapper: {
        backgroundColor: theme.body.background
    }
}))

export const Leftbar = makeStyles(theme => ({
    grid: {
        padding: "0.75rem 0.5rem 0.75rem 1rem",
        position: "absolute",
        left: "0",
        "&.sticky": {
            position: "fixed",
            top: "0",
            width: "100%"
        }
    },
    wrapper: {
        color: theme.body.color,
        backgroundColor: theme.leftbar.background,
        padding: "0.5rem",
        borderRadius: "10px 10px 10px 10px",
    },
    box: {
        width: "100%",
        textAlign: "left",
        padding: "0.5rem 0.5rem 0.25rem 0.5rem",
        "& > h6": {
            fontSize: "1rem"
        },
        "& .left-title": {
            position: "relative",
            "&:after": {
                borderLeft: "4px solid white",
                content: "",
                position: "absolute",
                top: "2rem",
                left: "0.5rem"
            }
        },
        "& .left-desc": {
            marginLeft: "0.5rem",
            paddingLeft: "2rem",
            position: "relative",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
        }
    },
    avatar: {
        textAlign: "center",
        padding: "8px"
    },
    avatarImage: {
        width: "calc(8px * 16)",
        height: "calc(8px * 16)",
        margin: "auto"
    }
}))

export const Center = makeStyles(theme => ({
    wrapper: {
        color: theme.body.color,
        backgroundColor: theme.center.background
    }
}))

export const Rightbar = makeStyles(theme => ({
    wrapper: {
        color: theme.body.color,
        backgroundColor: theme.rightbar.background
    }
}))

export const Topbar = makeStyles(theme => ({
    wrapper: {
        color: theme.body.color,
        backgroundColor: theme.topbar.background,
        '& a': {
            color: theme.leftbar.color,
        }
    }
}))