// core
import { Fragment, useEffect } from 'react'
import Link from 'next/link'
// library
import { Grid, Avatar, Box, Paper, List, ListItem } from '@material-ui/core'
// static
import { LeftSidebar } from '../../../../static/js/'
import { Menu } from '../../../../static/js/collection'

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
                            {Menu.map(item => 
                                <Link href={item.href} key={item.name}>
                                    <ListItem button>
                                        <a>{item.name}</a>
                                    </ListItem>
                                </Link>
                            )}
                        </List>
                    </Box>
                </Paper>
            </Grid>
        </Fragment>
    )
}