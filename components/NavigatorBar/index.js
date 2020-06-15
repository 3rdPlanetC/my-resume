import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import NavLink from '../../layout/NavLink'
import { Menu } from '../../static/js/collection'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

const NavBar = props => {
    return (
        <Grid lg={12} item className="navbar-grid">
            <AppBar position="static" className={`navbar-wrapper ${true ? "theme-dark": "theme-light"}`}>
                <Grid container direction="row">
                    <Grid item lg={6} className="navbar-menu">
                        {Menu.map((item, index) => 
                            <Box key={index}>
                                <NavLink href={item.href}>
                                    {item.name}
                                </NavLink>
                            </Box>
                        )}
                    </Grid>
                    <Grid item lg={6} className="navbar-search">
                        <Toolbar>
                            <div className="navbar-search-wrapper">
                                <div className="search-icon">
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    className="search-input"
                                />
                            </div>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </Grid>
    )
}

export default NavBar