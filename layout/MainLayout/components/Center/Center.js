// library
import { Grid } from '@material-ui/core'
// style
import { Center } from '../../../../style'

export default props => {
    const center = Center()
    return (
        <Grid lg={12} item className={`${center.wrapper} main-wrapper`}>
            {props.children}
        </Grid>
    )
}