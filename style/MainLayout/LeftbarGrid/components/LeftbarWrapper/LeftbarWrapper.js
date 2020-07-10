import { LeftbarAvatar, LeftbarMenu } from './components'

export default props => (`
    .leftbar-wrapper {
        padding: 0.5rem;
        border-radius: 10px 10px 10px 10px;
        margin-bottom: 1rem;
        background-color: ${props.theme.grid.background};
        ${LeftbarAvatar(props)}
        ${LeftbarMenu(props)}
    }
`)