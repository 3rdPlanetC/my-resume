import Link from 'next/link'

const NavLink = props => {
    return (
        <Link href={props.href} as={props.href}>
            <a className="kanit-medium">
                {props.children}
            </a>
        </Link>
    )
}

export default NavLink