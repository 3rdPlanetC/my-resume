// library
import { Grid } from '@material-ui/core'
// style
import { Rightbar } from '../../../../style'

export default props => {
    const rightbar = Rightbar()
    return (
        <Grid item lg={12} container className={`${rightbar.root} .rightbar-wrapper`}>
            <p>RightSideBar</p>
            <button
                onClick={() => props.setTheme(!props.theme)}
            >change theme</button>
        </Grid>
    )
}