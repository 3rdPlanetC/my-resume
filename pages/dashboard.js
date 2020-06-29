import { Topbar } from '../layout/DashboardLayout/components/'

export default function Dashboard() {
    return (
        <div>
            <Topbar />
            Dashboard
        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            
        }
    }
}