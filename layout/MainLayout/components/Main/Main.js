// library
import { Grid, Paper } from '@material-ui/core'

export default props => {
    // props
    const { children } = props
    return (
        <Grid lg={12} item >
            <Paper className={`main-wrapper`} elevation={3}>
                {children}
            </Paper>
        </Grid>
    )
}