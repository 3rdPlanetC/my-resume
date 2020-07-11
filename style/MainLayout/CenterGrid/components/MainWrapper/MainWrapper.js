export default props => (`
    .main-wrapper {
        background-color: ${props.theme.grid.background};
        padding: 0.75rem;
        border-radius: 10px 10px 10px 10px;
        .box-wrapper {
            padding: 1rem;
            .box-child {
                padding: 0.25rem 0.5rem;
                &.box-image {
                    width: auto;
                    & > img {
                        height: 100%;
                        width: 100%;
                    }
                }
                &.box-title {
                    & * {
                       margin: 0.35rem auto; 
                    }
                }
                &.box-tools {
                    ul {
                        list-style: none;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        padding: 0;
                        margin-bottom: 0.5rem;
                        li {
                            font-size: 1rem;
                            display: flex;
                        }
                    }
                }
            }
        }
    }
`)