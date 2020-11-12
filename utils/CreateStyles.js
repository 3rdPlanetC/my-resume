import { makeStyles, createStyles } from '@material-ui/core/styles'

const CreateStyles = (obj, responsive, styles) => {
    if (responsive) {
        return makeStyles(theme => createStyles({
            ...obj,
            root: {
                ...obj.root,
                [theme.breakpoints.up(responsive)]: {
                    ...styles
                }
            }
        }))
    }
    return makeStyles(theme => createStyles(obj))
}
export default CreateStyles