// library
import { Grid } from '@material-ui/core'
// components
import {  Leftbar, Rightbar, Topbar, Main } from './components'
// style
import { LeftbarGrid, BodyWrapper, RightbarGrid, CenterGrid } from '../../style/MainLayout'

export default props => {
    const { theme, className } = props
    return (
        <BodyWrapper className={`body-wrapper ${className}`} theme={theme}>
            <Grid container spacing={0}>
                <LeftbarGrid item container className="leftbar-grid" theme={theme}
                    md={3}
                    lg={3}
                >
                    <Leftbar />
                </LeftbarGrid>
                <CenterGrid item className="center-grid" theme={theme}
                    md={6}
                    lg={6}
                >
                    <Topbar />
                    <Main >
                        {props.children}
                    </Main>
                </CenterGrid>
                <RightbarGrid item container className="rightbar-grid" theme={theme}
                    md={3}
                    lg={3} 
                >
                    <Rightbar
                        randomTheme={props.randomTheme}
                        thene={props.theme}
                    />
                </RightbarGrid>
            </Grid>
        </BodyWrapper> 
    )
}