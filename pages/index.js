// core
import { Fragment, useEffect } from 'react'
import axios from 'axios'
// library
import { Grid, Box } from '@material-ui/core'
// Layout
import { MainLayout } from '../layout'
// Component
import { Seo } from '../components'

export default props => {
    // props
    const { randomTheme, theme } = props
    return (
        <Fragment>
            <Seo title="E3T Homepage" />
            <MainLayout className="index"
                randomTheme={randomTheme}
                theme={theme}
            >
                {/* Home content */}
            </MainLayout>
        </Fragment>
    )
}

export const getStaticProps = async ctx => {
    return {
        props: {

        }
    }
}