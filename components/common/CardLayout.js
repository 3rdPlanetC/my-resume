import clsx from 'clsx'
import { Paper, Box } from '@material-ui/core'
import CreateStyles from '../../utils/CreateStyles'
import { WindowControlImage } from '../common'

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
            <WindowControlImage />
            <Box>
                {children}
            </Box>
        </Paper>
    )
}

export default CardLayout