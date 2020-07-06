// core
import { useState } from 'react'
// component
import { Topbar, Sidebar } from './components'
// library
import { useTheme } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'

export default props => {
    // useState
    const [openSidebar, setOpenSidebar] = useState(false)

    // library
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    })
    
    // functions
    const handleSidebarOpen = () => {
      setOpenSidebar(true)
    }
  
    const handleSidebarClose = () => {
      setOpenSidebar(false)
    }

    return (
        <div>
            <Topbar 
                onSidebarOpen={handleSidebarOpen}
            />
            <Sidebar
                onClose={handleSidebarClose}
                open={isDesktop ? true : openSidebar}
                variant={isDesktop ? 'persistent' : 'temporary'}
            />
            <main>
                {props.children}
            </main>
        </div>
    )
}