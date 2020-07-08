// core
import { Fragment } from 'react'
// library
import { Grid } from '@material-ui/core'
// Layout
import { DashboardLayout } from '../../layout'

export default props => {
    return (
        <Fragment>
            <DashboardLayout className="" {...props}>
                <Grid container spacing={4} >
                    <Grid item xs={12} sm={6} lg={3} xl={3} >
                        test1
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} xl={3} >
                        test2
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} xl={3} >
                        test3
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} xl={3} >
                        test4
                    </Grid>
                    <Grid item xs={12} md={12} lg={8} xl={9} >
                        test5
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={3} >
                        test6
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={3} >
                        test7
                    </Grid>
                    <Grid item xs={12} md={12} lg={8} xl={9} >
                        test8
                    </Grid>
                </Grid>
            </DashboardLayout>
        </Fragment>
    )
}

export const getStaticProps = async ctx => {
    return {
        props: {
            
        }
    }
}