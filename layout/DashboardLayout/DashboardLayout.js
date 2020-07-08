// core
import { useState } from 'react'
// component
import { Topbar, Sidebar } from './components'
// library
import { useTheme } from '@material-ui/styles'
import { useMediaQuery, Grid } from '@material-ui/core'
// style
import { BodyWrapper, TopbarGrid, SidebarGrid, MainGrid } from '../../style/DashboardLayout'

export default props => {
    // props
    const { theme, className } = props
    // useState
    const [openSidebar, setOpenSidebar] = useState(false)

    // library
    const isDesktop = useMediaQuery(useTheme().breakpoints.up('lg'), {
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
        <BodyWrapper className={`body-wrapper ${className}`} theme={theme}>
            <Grid container spacing={0}>
                <TopbarGrid item container className="topbar-grid" theme={theme}>
                    <Topbar onSidebarOpen={handleSidebarOpen}/>
                </TopbarGrid>
                <SidebarGrid item container className="sidebar-grid" theme={theme}>
                    <Sidebar
                        onClose={handleSidebarClose}
                        open={isDesktop ? true : openSidebar}
                        variant={isDesktop ? 'persistent' : 'temporary'}
                    />
                </SidebarGrid>
                <MainGrid item container className="main-grid" theme={theme}>
                    <main>
                        {props.children}
                    </main>
                </MainGrid>
            </Grid>
        </BodyWrapper>
    )
}