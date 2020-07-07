// library
import { Grid } from '@material-ui/core'
// style

export default props => {
    return (
        <Grid lg={12} item className={`main-wrapper`}>
            {props.children}
        </Grid>
    )
}