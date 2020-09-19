// core
import { Fragment } from 'react'
// library
import { Grid } from '@material-ui/core'
// Layout
import { DashboardLayout } from '../layout'

export default props => {
    return (
        <Fragment>
            <DashboardLayout className="admin" {...props}>
                <Grid
                    container
                    spacing={4}
                >
                    <Grid 
                        item 
                        lg={3} 
                        sm={6} 
                        xl={3} 
                        xs={12} 
                    >
                        test1
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        test2
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        test3
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        test4
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={12}
                        xl={9}
                        xs={12}
                    >
                        test5
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xl={3}
                        xs={12}
                    >
                        test6
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xl={3}
                        xs={12}
                    >
                        test7
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={12}
                        xl={9}
                        xs={12}
                    >
                        test8
                    </Grid>
                </Grid>
            </DashboardLayout>
        </Fragment>
    )
}

export const getServerSideProps = async ctx => {
    return {
        props: {
            
        }
    }
}