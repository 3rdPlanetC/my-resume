export default props => (`
    .navbar-wrapper {
        padding: 0.5rem;
        border-radius: 10px 10px 10px 10px;
        margin-bottom: 1rem;
        background-color: ${props.theme.grid.background};
        & a {
            color: ${props.theme.body.color};
        }
        .navbar-menu {
            padding: 0.75rem;
            width: 100%;
            display: flex;
            font-size: 1.5rem;
            & > div {
                margin: auto 8px auto 8px;
                padding: 8px;
                width: calc(8px * 10);
                text-align: center;
            }
        }
        .navbar-search {
            position: relative;
            border-radius: 10px 10px 10px 10px;
            background-color: ${props.theme.grid.background};
            width: 100%;
            margin: auto 0.75rem auto auto;
            max-width: 20rem;
            &:hover {
                background-color: ${props.theme.grid.background};
            }
            &:focus {
                max-width: 25rem;
            }
            .navbar-search-wrapper {
                position: relative;
                .search-icon {
                    height: 100%;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    pointer-events: none;
                    padding: 0 16px 0 0;
                }
                .search-input {
                    color: white;
                    padding: 0 0 0 32px;
                    input {
                        font-family: kanit-regular;
                    }
                }
            }
        }
    }
`)