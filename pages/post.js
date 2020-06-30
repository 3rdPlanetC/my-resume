// core
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const { id } = router.query

    return <p>My Blog Post: {id}</p>
}

export const getStaticProps = async ctx => {
    return {
        props: {

        }
    }
}