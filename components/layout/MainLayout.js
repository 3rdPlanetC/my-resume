import clsx from 'clsx'
import { Grid, Container } from '@material-ui/core'
import CreateStyles from '../../utils/CreateStyles'
import { Sidebar, MainContent } from '../ui'

const MainLayout = props => {
    // props
    const { children } = props
    // create classes
    const classes = CreateStyles({
        root: {
            paddingTop: "16px"
        }
    })()
    return (
        <Container fixed className={clsx(classes.root)}>
            <Grid container spacing={2} >
                <Sidebar />
                <MainContent >
                    {children}
                </MainContent>
            </Grid>
        </Container>
    )
}

export default MainLayout