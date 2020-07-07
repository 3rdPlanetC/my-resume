// library
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
// components
import { LeftbarWrapper } from './components'

export default styled(Grid)`
    padding: 0.75rem 0.5rem 0.75rem 1rem;
    position: absolute;
    left: 0;
    &.sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }
    ${props => LeftbarWrapper(props)}
`