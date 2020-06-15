import Grid from '@material-ui/core/Grid'

const Main = props => {
    return (
        <Grid lg={12} item className={`${true ? "theme-dark": "theme-light"} main-wrapper`}>
            {props.children}
        </Grid>
    )
}

export default Main