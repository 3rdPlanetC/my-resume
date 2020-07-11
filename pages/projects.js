// core
import { Fragment } from 'react'
import axios from 'axios'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
// library
import { Grid, Box, Typography } from '@material-ui/core'
// Layout
import { MainLayout } from '../layout'
// Component
import { Seo } from '../components'
import ImageContainer from '../components/Image/Image'

const Image = props => {
    // props
    const { thumbnail, slug } = props
    return (
        <ImageContainer
            src={thumbnail}
            alt={slug}
            height={250}
            width={250/9*16}
        />
    )
}

const ProjectBlock = props => {
    // props
    const { allProjects } = props
    return (
        <Grid container direction="row">
            {allProjects.map(project =>
                <Grid item sm={6} md={6} lg={6} xl={6} className="box-wrapper" key={project.id}>
                    <Box className="box-image box-child">
                        <Image 
                            thumbnail={project.thumbnail}
                            slug={project.slug}
                        />
                    </Box>
                    <Box className="box-title box-child">
                        <Typography variant="h5" className="kanit-medium box-title" id={`box-title-${project.id}`} gutterBottom>
                            {project.title}
                        </Typography>
                    </Box>
                    <Box className="box-tools box-child">
                        <ul>
                            {project.tools.map(tool => 
                                <li className="kanit-regular box-tool" id={`box-desc-${project.id}`}>
                                    <ArrowRightIcon />
                                    <span>{tool}</span>
                                </li>
                            )}
                        </ul>
                    </Box>
                    <Box className="box-shortdes box-child">
                        <Typography variant="body1" className="kanit-regular box-date" id={`box-date-${project.id}`} gutterBottom>
                            สร้างเมื่อ {project.dateCreate}
                        </Typography>
                    </Box>
                </Grid>
            )}
        </Grid>
    )
}

export default props => {
    // props
    const { randomTheme, theme, allProjects } = props
    return (
        <Fragment>
            <Seo title="E3T Project" />
            <MainLayout className="index"
                randomTheme={randomTheme}
                theme={theme}
            >
                <ProjectBlock allProjects={allProjects}/>
            </MainLayout>
        </Fragment>
    )
}

export const getStaticProps = async ctx => {
    const res = await axios.get('http://beeativesupportcom.beeative.codeorange.host/earth/wp-json/wp/v2/posts?categories=2')
    const { data } = await res
    const allProjects = data.map(_ => {
        return {
            id: _.id,
            slug: _.slug,
            thumbnail: _.image.source_url,
            title: _.title.rendered,
            tools: _.tags_field,
            dateCreate: new Date(_.date).toLocaleDateString()
        }
    })
    return {
        props: {
            allProjects
        }
    }
}