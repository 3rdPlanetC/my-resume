// core
import styled from 'styled-components'
import Link from 'next/link'

const Menu = props => {
    const { href, children } = props
    return (
        <li>
            <Link href={href}>
                <a>{children}</a>
            </Link>
        </li>
    )
}

const MenuLink = styled(Menu)`
    list-style: none;
    font-family: 'Kanit';
    font-weight: 500;
    width: 100%;
    padding: 0 1rem;
`

export default MenuLink