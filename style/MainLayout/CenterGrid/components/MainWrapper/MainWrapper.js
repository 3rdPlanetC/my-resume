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
                    height: 250px;
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
                &.box-shortdesc {
    
                }
            }
        }
    }
`)