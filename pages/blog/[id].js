// import Layout from '../../components/layout'

export default function BlogId(props) {
    return (
        <div>
            Blog {props.id}
        </div>
    )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  return {
    paths: [
        '/blog/1',
        '/blog/2' // See the "paths" section below
    ],
    fallback: false
  }
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}