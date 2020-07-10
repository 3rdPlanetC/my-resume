// core
import { Fragment } from 'react'
// library
import { Grid, Box } from '@material-ui/core'
// Layout
import { MainLayout } from '../layout'
// Component
import { Seo, Text } from '../components'
import ImageContainer from '../components/Image/Image'

const JobImage = props => {
    const { index } = props
    return (
        <ImageContainer
            src={`https://source.unsplash.com/random?random=${index}`}
            height={250}
            width={250}
            alt="test"
        />
    )
}

const JobPost = props => {
    return (
        <Grid container direction="row">
            {[1,2,3,4,5,6,7,8].map((item, index) =>
                <Grid item xl={4} lg={4} md={4} sm={6} className="box-wrapper" key={index}>
                    <Box className="box-image box-child">
                        <JobImage 
                            index={index}
                        />
                    </Box>
                    <Box className="box-title box-child">
                        <Text ele="h5" fontClass={`kanit-medium`} spanClass="box-title" gutterBottom id={`box-title-${index}`}>
                            หัวเรื่องทดสอบๆ {index}
                        </Text>
                    </Box>
                    <Box className="box-shortdes box-child">
                        <Text ele="body1" fontClass="kanit-regular" spanClass="box-shortdesc" gutterBottom id={`box-desc-${index}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Box>
                    <Box className="box-shortdes box-child">
                        <Text ele="body2" fontClass="kanit-regular" spanClass="box-date" gutterBottom id={`box-date-${index}`}>
                            สร้างเมื่อ 01/06/2020
                        </Text>
                    </Box>
                </Grid>
            )}
        </Grid>
    )
}

export default props => {
    return (
        <Fragment>
            <Seo title="E3T Homepage" />
            <MainLayout {...props} className="index">
                <JobPost />
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