export default props => (`
    .sidebar-drawer {
        width: 240px;
        @media screen and (min-width: 1280px) {
            margin-top: 64px;
            height: calc(100% - 64px)
        }
        .sidebar-nav {
            margin-bottom 16px;
            padding: 16px;
            .sidebar-nav-item {
                display: flex;
                padding-top: 0;
                padding-bottom: 0;
                .button {
                    padding: 10px 8px;
                    justify-content: flex-start;
                    text-transform: none;
                    letter-spacing: 0;
                    width: 100%;
                    &.active {
                        color: ${props.theme.palette.primary.main};
                        .icon {
                            color: ${props.theme.palette.primary.main};
                        }
                    }
                    .icon {
                        height: 24px;
                        width: 24px;
                        display: flex;
                        align-items: center;
                        margin-right: 8px;
                    }
                }
            }
        }
    }
`)