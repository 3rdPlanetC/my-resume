import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuItem } from '@material-ui/core'

const NavMenu = props => {
    // props
    const { href, name } = props
    // useRouter
    const router = useRouter()
    return (
        <Link href={href} passHref>
            <a href={href} className={router.pathname === href ? 'active' : ''}>
                <MenuItem>
                    <span>
                        <span className="variable-text">const </span> 
                        <span className="page-text">{name} = </span>
                        <span className="checking-value-text">{(router.pathname === href).toString()}</span>
                    </span>
                </MenuItem>
            </a>
        </Link>
    )
}

export default NavMenu