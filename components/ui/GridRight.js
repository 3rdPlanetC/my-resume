import { Grid } from '@material-ui/core'

const GridRight = props => {
    const { children, className } = props
    return (
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9} 
            direction="row" 
            spacing={2} 
            container
            className={className}
        >
            <Grid item xs={12}>Header</Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    )
}

export default GridRight