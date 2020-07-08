// core
import { Fragment } from 'react'
// library
import { List, ListItem, Button } from '@material-ui/core'
// components
import { NextLink } from '../../../../../../components'

export default props => {
    // props
    const { pages, className } = props

    return (
        <List
            className={className}
        >
            {pages.map(page => (
                <ListItem
                    className={`sidebar-nav-item`}
                    disableGutters
                    key={page.title}
                >
                    <div style={{ flexGrow: 1 }} >
                        <NextLink activeClassName="active" href={page.href}>
                            <Button className={`button`}>
                                <Fragment>
                                    <div className={`icon`}>{page.icon}</div>
                                    {page.title}
                                </Fragment>
                            </Button>
                        </NextLink>
                    </div>
                </ListItem>
            ))}
        </List>
    )
}