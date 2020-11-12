import clsx from 'clsx'
import { Paper } from '@material-ui/core'
import CreateStyles from '../../utils/CreateStyles'

const CardLayout = props => {
    // props
    const { children, className } = props
    // create classes
    const classes = CreateStyles({
        root: {
            borderRadius: 10,
            paddingTop: 16,
            paddingBottom: 16
        }
    })()
    return (
        <Paper elevation={4} className={clsx(classes.root, "card-layout", className)}>
            {children}
        </Paper>
    )
}

export default CardLayout