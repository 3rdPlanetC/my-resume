// library
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
// components
import { config } from '../../config'

export default styled(Grid)`
    ${config}
    background-color: ${props => props.theme.body.background};
    color: ${props => props.theme.body.color};
    padding-top: 64px;
    padding-left: 240px;
`