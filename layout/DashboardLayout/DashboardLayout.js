import { Topbar } from './components'

export default props => {
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