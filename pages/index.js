// react
import { useState } from 'react'
// css, js config
import "../static/less/pages/index.less"
// Library
import Grid from '@material-ui/core/Grid'
import Boxer from '../layout/Boxer'
import Skeleton from '@material-ui/lab/Skeleton'
// Components
import HeaderSEO from '../components/etc/HeaderSEO'
import NavBar from '../components/NavigatorBar'
import LeftSideBar from '../components/LeftSideBar'
import Main from '../components/Main'
import RightSideBar from '../components/RightSideBar'
import Text from "../layout/Text"

const JobImage = props => {
    const { imageStatus, handleImageLoaded, handleImageErrored } = props
    return (
        <>
            <img src="https://source.unsplash.com/random" 
                alt="test"
                onLoad={handleImageLoaded}
                onError={handleImageErrored}
                style={!imageStatus ? (
                    {
                        display: 'none'
                    }
                ) : (
                    {
                        display: 'initial'
                    }
                )}
            />
            {!imageStatus && <Skeleton animation="wave" variant="rect" width="100%" height="100%"/>}
        </>
    )
}

const JobPost = props => {
    const [imageStatus, setImageStatus] = useState(false)
    const handleImageLoaded = () => {
        setImageStatus(true)
      }
    
    const handleImageErrored = () => {
        console.log("error loading image")
    }
    return (
        <Grid container direction="row">
            {[1,2,3,4,5,6,7,8].map((item, index) =>
                <Grid item xl={3} lg={3} md={4} sm={6} className="box-wrapper" key={index}>
                    <Boxer className="box-image box-child">
                        <JobImage 
                            imageStatus={imageStatus}
                            handleImageLoaded={handleImageLoaded}
                            handleImageErrored={handleImageErrored}
                        />
                    </Boxer>
                    <Boxer className="box-title box-child">
                        <Text ele="h5" fontClass="kanit-medium" spanClass="box-title" gutterBottom id={`box-title-${index}`}>
                            หัวเรื่องทดสอบๆ {index}
                        </Text>
                    </Boxer>
                    <Boxer className="box-shortdes box-child">
                        <Text ele="body1" fontClass="kanit-regular" spanClass="box-shortdesc" gutterBottom id={`box-desc-${index}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Boxer>
                    <Boxer className="box-shortdes box-child">
                        <Text ele="body2" fontClass="kanit-regular" spanClass="box-date" gutterBottom id={`box-date-${index}`}>
                            สร้างเมื่อ 01/06/2020
                        </Text>
                    </Boxer>
                </Grid>
            )}
        </Grid>
    )
}

export default function Home(props) {
    return (
        <Grid className={`${true ? "theme-dark" : "theme-light"} body-wrapper index`}>
            <HeaderSEO title="E3T - Homepage">
                <script async type="module" src="/static/js/style.js" id="leftside" page="index"/>
            </HeaderSEO>
            <Grid container spacing={0}>
                {/* Left Side Bar */}
                <Grid item lg={2} md={3} container className="leftbar-grid">
                    <LeftSideBar />
                </Grid>
                {/* NavBar && Main */}
                <Grid item lg={8} md={7} className="center-grid">
                    <NavBar />
                    <Main>
                        <JobPost />
                    </Main>
                </Grid>
                {/* Right Side Bar */}
                <Grid item lg={2} md={2} container className="rightbar-grid">
                    <RightSideBar />
                </Grid>
            </Grid>
        </Grid>
    )
}