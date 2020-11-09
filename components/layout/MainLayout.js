import clsx from 'clsx'
import { Grid, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import GridLeft from '../ui/GridLeft'
import GridRight from '../ui/GridRight'

const styles = {
    root: {
        paddingTop: "16px"
    },
    gridRight: {

    }
}

const MainLayout = props => {
    const { children, classes } = props
    return (
        <Container fixed className={clsx(classes.root)}>
            <Grid container spacing={2} >
                <GridLeft />
                <GridRight className={clsx(classes.gridRight)} >
                    {children}
                </GridRight>
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(MainLayout)