// library
import { Grid } from '@material-ui/core'
// style
import { Center } from '../../../../style'

export default props => {
    const classes = Center()
    return (
        <Grid lg={12} item className={`${classes.wrapper} main-wrapper`}>
            {props.children}
        </Grid>
    )
}