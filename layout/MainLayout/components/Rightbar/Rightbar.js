// library
import { Grid } from '@material-ui/core'

export default props => {
    // functions
    const handleClick = ev => {
        ev.preventDefault()
        props.setTheme(prev => !prev)
    }
    return (
        <Grid item lg={12} container className={`.rightbar-wrapper`}>
            <p>RightSideBar</p>
            <button
                onClick={handleClick}
            >change theme</button>
        </Grid>
    )
}