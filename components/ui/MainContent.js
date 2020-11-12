import clsx from 'clsx'
import { Grid } from '@material-ui/core'
import CreateStyles from '../../utils/CreateStyles'
import { CardLayout } from '../common'

const MainContent = props => {
    // props
    const { children } = props
    // create classes
    const classes = CreateStyles({
        root: {
            height: "100%",
            gap: "16px",
            display: "flex"
        }
    }, 'md', {
        maxWidth: "calc(75% + 50px)",
        flexBasis: "calc(75% + 50px)"
    })()
    return (
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9} 
            direction="column" 
            className={clsx(classes.root, "main-content")}
        >
            <Grid item xs={12}>
                <CardLayout>
                    Header
                </CardLayout>
            </Grid>
            <Grid item xs={12}>
                <CardLayout>
                    {children}
                </CardLayout>
            </Grid>
        </Grid>
    )
}

export default MainContent