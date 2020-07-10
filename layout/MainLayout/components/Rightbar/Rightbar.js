// core
import { Fragment } from 'react'
// library
import { Grid, Paper } from '@material-ui/core'

export default props => {
    // props
    const { randomTheme } = props
    // functions
    const handleClick = ev => {
        ev.preventDefault()
        randomTheme()
    }
    return (
        <Fragment>
            <Grid item lg={6}>
                <Paper className={`rightbar-wrapper`} elevation={3}>
                    <button
                        onClick={handleClick}
                    >change theme</button>
                </Paper>
            </Grid>
            <Grid item lg={6} xl={6} />
        </Fragment>
    )
}