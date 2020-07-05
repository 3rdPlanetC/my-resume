// library
import { Grid } from '@material-ui/core'
// components
import { Leftbar, Rightbar, Topbar, Center } from './components'
// style
import { Body } from '../../style'

export default props => {
    const body = Body()
    return (
        <Grid className={`${body.wrapper} body-wrapper index`}>
            <Grid container spacing={0}>
                <Grid item container className="leftbar-grid" 
                    lg={2} 
                    md={3} 
                >
                    <Leftbar />
                </Grid>
                <Grid item className="center-grid"
                    lg={8} 
                    md={7}
                >
                    <Topbar />
                    <Center>
                        {props.children}
                    </Center>
                </Grid>
                <Grid item container className="rightbar-grid"
                    lg={2} 
                    md={2}
                >
                    <Rightbar 
                        setTheme={props.setTheme}
                        thene={props.theme}
                    />
                </Grid>
            </Grid> 
        </Grid> 
    )
}