import { LeftbarAvatar, LeftbarBox } from './components'

export default props => (`
    .leftbar-wrapper {
        padding: 0.5rem;
        border-radius: 10px 10px 10px 10px;
        background-color: ${props.theme.grid.background};
        ${LeftbarAvatar(props)}
        ${LeftbarBox(props)}
    }
`)