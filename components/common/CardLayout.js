import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        borderRadius: 10,
    }
})

const CardLayout = props => {
    const { children } = props
    const classes = useStyles()
    return (
        <Paper elevation={4} className="card-layout" classes={{root: classes.root}}>
            {children}
        </Paper>
    )
}

export default CardLayout