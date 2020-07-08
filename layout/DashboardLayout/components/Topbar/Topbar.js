// Core
import { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'
// library
import { AppBar, Toolbar, Badge, Hidden, IconButton, Tooltip, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'


export default props => {
    const { className, onSidebarOpen } = props
    const [notifications] = useState([])

    // functions
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
        <AppBar>
            <Toolbar>
                <Link href="/admin">
                    {/* <img
                        alt="Logo"
                        src="/static/images/logo--white.svg"
                    /> */}
                    <a>My Dashboard</a>
                </Link>
                <div style={{flexGrow: "1"}} />
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