import { Grid } from '@material-ui/core'
import { Leftbar, Rightbar, Topbar } from './components'

export default props => {
    return (
        <Grid className={`${true ? "theme-dark" : "theme-light"} body-wrapper index`}>
            <Grid container spacing={0}>
                <Grid item container className="leftbar-grid" 
                    lg={2} 
                    md={3} 
                >
                    <Leftbar />
                </Grid>
                <Grid item className="center-grid"
                    lg={8} 
                    md={7}
                >
                    <Topbar />
                    <Grid lg={12} item className={`${true ? "theme-dark": "theme-light"} main-wrapper`}>
                        {props.children}
                    </Grid>
                </Grid>
                <Grid item container className="rightbar-grid"
                    lg={2} 
                    md={2}
                >
                    <Rightbar />
                </Grid>
            </Grid> 
        </Grid> 
    )
}