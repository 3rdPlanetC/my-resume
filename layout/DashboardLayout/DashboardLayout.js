import { Topbar } from './components'

const DashboardLayout = props => {
    return (
        <div>
            <Topbar 
                //onSidebarOpen={handleSidebarOpen} 
            />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default DashboardLayout