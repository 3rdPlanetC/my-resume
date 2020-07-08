// library
import { Drawer } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import DescriptionIcon from '@material-ui/icons/Description'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
// components
import { SidebarNav } from './components'

export default props => {
    // props
    const { open, variant, onClose } = props

    const pages = [
        {
            title: 'Blog',
            href: '/admin/blog',
            icon: <AssignmentIcon />
        },
        {
            title: 'Project',
            href: '/admin/project',
            icon: <DescriptionIcon />
        },
        {
            title: 'Account',
            href: '/admin/account',
            icon: <AccountBoxIcon />
        },
    ]

    return (
        <Drawer
            anchor="left"
            classes={{ 
                paper: "sidebar-drawer"
            }}
            onClose={onClose}
            open={open}
            variant={variant}
        >
            <SidebarNav
                className={`sidebar-nav`}
                pages={pages}
            />
        </Drawer>
    )
}
