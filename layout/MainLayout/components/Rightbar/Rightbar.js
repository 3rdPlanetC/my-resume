// library
import { Grid } from '@material-ui/core'
// style
import { Rightbar } from '../../../../style'

export default props => {
    const classes = Rightbar()
    return (
        <Grid item lg={12} container className={`${classes.root} .rightbar-wrapper`}>
            <p>RightSideBar</p>
            <button
                onClick={() => props.setTheme(false)}
            >change theme</button>
        </Grid>
    )
}