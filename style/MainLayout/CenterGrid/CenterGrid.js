// library
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
// components
import { TopbarWrapper, MainWrapper } from './components'

export default styled(Grid)`
    padding: 0.75rem 0.5rem 0.75rem 0.5rem;
    ${props => TopbarWrapper(props)}
    ${props => MainWrapper(props)}
`