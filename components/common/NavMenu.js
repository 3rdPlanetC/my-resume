import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuItem } from '@material-ui/core'
import { CursorImage } from '../common'

const NavMenu = props => {
    // props
    const { href, name } = props
    // useRouter
    const router = useRouter()
    // boolean
    const pathChecker = router.pathname === href
    return (
        <Link href={href} passHref>
            <a href={href} className={ pathChecker ? 'active' : ''}>
                <MenuItem>
                    <span>
                        <span className="variable-text">const </span> 
                        <span className="page-text">{name}</span>
                        <span className="equal-text"> = </span>
                        <span className="checking-value-text">{pathChecker.toString()}</span>
                        { pathChecker && <CursorImage /> }
                    </span>
                </MenuItem>
            </a>
        </Link>
    )
}

export default NavMenu