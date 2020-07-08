// library
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export default styled(Grid)`
    main {
        padding: ${props => props.theme.spacing(2)}px;
        width: 100%;
    }
`