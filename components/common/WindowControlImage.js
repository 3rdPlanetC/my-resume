import clsx from 'clsx'
import CreateStyles from '../../utils/CreateStyles'

const WindowControlImage = props => {
    // create classes
    const classes = CreateStyles({
        root: {
            width: "100%",
            marginLeft: "1rem"
        },
    })()
    return (
        <div className={clsx(classes.root)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
                <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                    <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle>
                    <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle>
                    <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle>
                </g>
            </svg>
        </div>
    )
}

export default WindowControlImage