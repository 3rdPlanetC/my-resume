// core
import { Fragment } from 'react'
// Layout
import { DashboardLayout } from '../layout'

export default () => {
    return (
        <Fragment>
            <DashboardLayout>
                Dashboard
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