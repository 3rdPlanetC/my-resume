// core
import { Fragment, useEffect } from 'react'
import Link from 'next/link'
// library
import { Grid, Avatar, Box, Paper, List, ListItem } from '@material-ui/core'
// static
import { LeftSidebar } from '../../../../static/js/'

export default props => {
    // useEffect
    useEffect(() => {
        LeftSidebar().screenSticky()
    }, [])
    return (
        <Fragment>
            <Grid item lg={6} />
            <Grid item lg={6} >
                <Paper className={`leftbar-wrapper`} elevation={3}>
                    <Box className="leftbar-avatar">
                        <Avatar alt="Remy Sharp" src="/static/images/earth-1.jpg" className="avatar-image" />
                    </Box>
                </Paper>
                <Paper className={`leftbar-wrapper`} elevation={3}>
                    <Box className="leftbar-menu">
                        <List component="nav">
                            <Link href="/">
                                <ListItem button>
                                    <a>HOME</a>
                                </ListItem>
                            </Link>
                            <Link href="/projects">
                                <ListItem button>
                                    <a>PROJECT</a>
                                </ListItem>
                            </Link>
                            <Link href="/about">
                                <ListItem button>
                                    <a>ABOUT ME</a>
                                </ListItem>
                            </Link>
                            <Link href="/skills">
                                <ListItem button>
                                    <a>SKILLS</a>
                                </ListItem>
                            </Link>
                            <Link href="/contact">
                                <ListItem button>
                                    <a>CONTACT</a>
                                </ListItem>
                            </Link>
                        </List>
                    </Box>
                </Paper>
            </Grid>
        </Fragment>
    )
}