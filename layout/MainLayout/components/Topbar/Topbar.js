import { Grid, Box, AppBar, Toolbar, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Link from 'next/link'
import { Menu } from '../../../../static/js/collection'

export default props => {
    return (
        <Grid lg={12} item className="navbar-grid">
            <AppBar position="static" className={`navbar-wrapper ${true ? "theme-dark": "theme-light"}`}>
                <Grid container direction="row">
                    <Grid item lg={6} className="navbar-menu">
                        {Menu.map((item, index) => 
                            <Box key={index}>
                                <Link href={item.href} as={item.href}>
                                    <a className="kanit-medium">
                                        {item.name}
                                    </a>
                                </Link>
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