import Image from 'next/image'
import clsx from 'clsx'
import { Grid, MenuList } from '@material-ui/core'
import CreateStyles from '../../utils/CreateStyles'
import { CardLayout, NavMenu } from '../common'

const menus = [
    {
        href: "/",
        name: "Home"
    },
    {
        href: "/projects",
        name: "Projects"
    },
    {
        href: "/about",
        name: "AboutMe"
    },
    {
        href: "/skills",
        name: "Skills"
    },
    {
        href: "/contact",
        name: "Contact"
    }
]

const Sidebar = props => {
    // create classes
    const classes = CreateStyles({
        root: {
            height: "100%",
            gap: "16px",
            display: "flex"
        },
        avatarContainer: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        },
        avatar: {
            borderRadius: "50%"
        }
    }, 'lg', {
        maxWidth: "calc(25% - 50px)",
        flexBasis: "calc(25% - 50px)"
    })()
    return (
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} 
            direction="column"
            className={clsx(classes.root, "sidebar")}
        >
            <Grid item xs={12} >
                <CardLayout className={clsx(classes.avatarContainer)}>
                    <Image src="/avatar.jpg" width="128" height="128" className={clsx(classes.avatar)}/>
                </CardLayout>
            </Grid>
            <Grid item xs={12}>
                <CardLayout>
                    <MenuList>
                        {menus.map((menu, i) => (
                            <NavMenu href={menu.href} key={i} name={menu.name} />
                        ))}
                    </MenuList>
                </CardLayout>
            </Grid>
        </Grid>
    )
}

export default Sidebar