// library
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
// components
import { config } from '../../config'

export default styled(Grid)`
    ${config}
    background-color: ${props => props.theme.body.background};
    color: ${props => props.theme.body.color};
    @media screen and (min-width: 960px) {
        &.index.body-wrapper {
            // .center-grid {
            //     margin-left: calc((2/12) * 100%) !important;
            //     margin-right: calc((2/12) * 100%) !important;
            // }
        }
        &.blog.body-wrapper {
            // .center-grid {
            //     margin-left: ~"calc((2/12) * 100%)" !important;
            //     margin-right: ~"calc((2/12) * 100%)" !important;
            // }
        }
    }
    @media screen and (min-width: 1280px) {
        &.index.body-wrapper {
            .center-grid {
                margin-left: calc((3/12) * 100%) !important;
                margin-right: calc((3/12) * 100%) !important;
            }
        }
        &.blog.body-wrapper {
            // .center-grid {
            //     margin-left: ~"calc((2/12) * 100%)" !important;
            //     margin-right: ~"calc((2/12) * 100%)" !important;
            // }
        }
    }
`