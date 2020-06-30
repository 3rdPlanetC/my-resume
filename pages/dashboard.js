import { Topbar } from '../layout/DashboardLayout/components/'

export default () => {
    return (
        <div>
            <Topbar />
            Dashboard
        </div>
    )
}

export const getServerSideProps = async ctx => {
    return {
        props: {
            
        }
    }
}