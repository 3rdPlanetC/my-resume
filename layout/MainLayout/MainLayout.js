// library
import { Grid } from '@material-ui/core'
// components
import { 
    Leftbar,
    Rightbar,
    Topbar,
    Main
} from './components'
// style
import { LeftbarGrid, BodyWrapper, RightbarGrid, CenterGrid } from '../../style/MainLayout'

export default props => {
    const { theme } = props
    return (
        <BodyWrapper className={`body-wrapper index`} theme={theme}>
            <Grid container spacing={0}>
                <LeftbarGrid item container className="leftbar-grid" theme={theme}
                    md={3} 
                    lg={2} 
                >
                    <Leftbar />
                </LeftbarGrid>
                <CenterGrid item className="center-grid" theme={theme}
                    lg={8} 
                    md={7}
                >
                    <Topbar />
                    <Main >
                        {props.children}
                    </Main>
                </CenterGrid>
                <RightbarGrid item container className="rightbar-grid" theme={theme}
                    lg={2} 
                    md={2}
                >
                    <Rightbar
                        setTheme={props.setTheme}
                        thene={props.theme}
                    />
                </RightbarGrid>
            </Grid> 
        </BodyWrapper> 
    )
}