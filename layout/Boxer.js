import Box from '@material-ui/core/Box'

const Boxer = props => {
    return (
        <Box className={props.className} id={props.id}>
            {props.children}
        </Box>
    )
}

export default Boxer