// library
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export default styled(Grid)`
    padding: 0.75rem 0.5rem;
    position: fixed !important;
    right: 0;
    .rightbar-wrapper {
        padding: 0.5rem;
        border-radius: 10px 10px 10px 10px;
        background-color: ${props => props.theme.grid.background};
    }
`