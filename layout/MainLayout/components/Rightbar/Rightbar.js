import { Grid } from '@material-ui/core'

export default props => {
    return (
        <Grid item lg={12} container className={`${true ? "theme-dark": "theme-light"} .rightbar-wrapper`}>
            <p>RightSideBar</p>
        </Grid>
    )
}