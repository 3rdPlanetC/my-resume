export default props => (`
    .navbar-wrapper {
        padding: 0.5rem;
        border-radius: 10px 10px 10px 10px;
        margin-bottom: 1rem;
        background-color: ${props.theme.grid.background};
        & a {
            color: ${props.theme.body.color};
        }
    }
`)