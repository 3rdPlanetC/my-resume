import Image from 'next/image'
import clsx from 'clsx'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CardLayout from '../common/CardLayout'

const styles = {
    root: {
        height: "100%",
    },
    avatar: {
        borderRadius: "50%"
    }
}

const GridLeft = props => {
    const { classes } = props
    return (
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} 
            direction="row"
            spacing={2}
            container
            className={clsx(classes.gridLeft)}
        >
            <Grid item xs={12} >
                <CardLayout>
                    <div className="avatar-container">
                        <Image src="/avatar.jpg" width="128" height="128" className={clsx(classes.avatar)}/>
                    </div>
                </CardLayout>
            </Grid>
            <Grid item xs={12}>
                <CardLayout>
                    Menu
                </CardLayout>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(GridLeft)