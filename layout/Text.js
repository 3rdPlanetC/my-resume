import Typography from '@material-ui/core/Typography'

const Text = props => {
    return (
        <Typography variant={props.ele} gutterBottom>
            <span className={`${props.fontClass} ${props.spanClass}`} id={props.id} title={props.children}>
                {props.children}
            </span>
        </Typography>
    )
}

export default Text