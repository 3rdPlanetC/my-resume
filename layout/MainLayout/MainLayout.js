// library
import { Grid } from '@material-ui/core'
// components
import { 
    Leftbar as LeftbarComponent, 
    Rightbar as RightbarComponent, 
    Topbar as TopbarComponent, 
    Center as CenterComponent 
} from './components'
// style
import { Body, Leftbar as LeftbarStyle } from '../../style'

export default props => {
    const body = Body()
    const leftbar = LeftbarStyle()
    return (
        <Grid className={`${body.wrapper} body-wrapper index`}>
            <Grid container spacing={0}>
                <Grid item container className={`${leftbar.grid} leftbar-grid`}
                    lg={2} 
                    md={3} 
                >
                    <LeftbarComponent />
                </Grid>
                <Grid item className="center-grid"
                    lg={8} 
                    md={7}
                >
                    <TopbarComponent />
                    <CenterComponent>
                        {props.children}
                    </CenterComponent>
                </Grid>
                <Grid item container className="rightbar-grid"
                    lg={2} 
                    md={2}
                >
                    <RightbarComponent 
                        setTheme={props.setTheme}
                        thene={props.theme}
                    />
                </Grid>
            </Grid> 
        </Grid> 
    )
}