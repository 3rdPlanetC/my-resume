export default props => (`
    .leftbar-box {
        width: 100%;
        text-align: left;
        padding: 0.5rem 0.5rem 0.25rem 0.5rem;
        & > h: {
            font-size: 1rem;
        }
        &.left-title {
            position: relative;
            &::after {
                border-left: 4px solid white;
                content: "";
                position: absolute;
                top: 2rem;
                left: 0.5rem;
            }
        }
        &.left-desc {
            margin-left: 0.5rem;
            padding-left: 2rem;
            position: relative;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
`)