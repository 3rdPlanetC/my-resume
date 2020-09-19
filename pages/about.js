// core
import { Fragment } from 'react'
// Layout
import { MainLayout } from '../layout'
// Component
import { Seo } from '../components'

export default props => {
    return (
        <Fragment>
            <Seo title="E3T Homepage" />
            <MainLayout {...props} className="index">
                {/* About Page */}
            </MainLayout>
        </Fragment>
    )
}

export const getStaticProps = ctx => {
    return {
        props: {

        }
    }
}