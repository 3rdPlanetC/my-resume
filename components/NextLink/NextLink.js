import { withRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = props => {
    return (
        <Link href={props.href}>
            <a>{props.children}</a>
        </Link>
    )
}

export default withRouter(ActiveLink)