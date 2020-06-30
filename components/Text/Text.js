import { Typography }  from '@material-ui/core'

export default props => {
    return (
        <Typography variant={props.ele} gutterBottom>
            <span className={`${props.fontClass} ${props.spanClass}`} id={props.id} title={props.children}>
                {props.children}
            </span>
        </Typography>
    )
}