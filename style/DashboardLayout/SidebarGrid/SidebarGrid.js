// library
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
// components
import { SidebarDrawer } from './components'

export default styled(Grid)`
    ${props => SidebarDrawer(props)}
`