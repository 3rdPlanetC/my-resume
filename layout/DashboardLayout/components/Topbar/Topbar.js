// Core
import { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Badge, Hidden, IconButton, Tooltip } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'

const useStyles = makeStyles(theme => ({
    flexGrow: {
        flexGrow: 1
    },
}))

const Topbar = props => {
    const { className, onSidebarOpen, ...rest } = props
    const classes = useStyles()
    const [notifications] = useState([])

    const handleLogout = async ev => {
        ev.preventDefault()
        try {
            const res = await axios.get('/api/logout')
            Router.push('/login')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AppBar
            {...rest}
        >
            <Toolbar>
                <Link href="/">
                    <img
                        alt="Logo"
                        src="/static/images/logo--white.svg"
                    />
                </Link>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <IconButton color="inherit">
                        <Badge
                            badgeContent={notifications.length}
                            color="primary"
                            variant="dot"
                        >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={handleLogout}
                    >
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        // onClick={onSidebarOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar
