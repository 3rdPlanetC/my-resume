// library
import { Grid } from '@material-ui/core'
// style
import { Rightbar } from '../../../../style'

export default props => {
    const rightbar = Rightbar()
    const handleClick = ev => {
        ev.preventDefault()
        props.setTheme(prev => !prev)
    }
    return (
        <Grid item lg={12} container className={`${rightbar.root} .rightbar-wrapper`}>
            <p>RightSideBar</p>
            <button
                onClick={handleClick}
            >change theme</button>
        </Grid>
    )
}