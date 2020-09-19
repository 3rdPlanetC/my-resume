import Head from 'next/head'

export default props => {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap" />
            <meta charSet="utf-8"/>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            {props.children}
        </Head>
    )
}