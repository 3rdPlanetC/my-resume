import Head from 'next/head'

const HeaderSEO = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {props.children}
        </Head>
    )
}

export default HeaderSEO