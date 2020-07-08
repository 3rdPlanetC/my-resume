import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import { ServerStyleSheet } from 'styled-components';
// import theme from '../src/theme';

class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					{/* Use minimum-scale=1 to enable GPU rasterization */}
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
					{/* PWA primary color */}
					{/* <meta name="theme-color" content={theme.palette.primary.main}/> */}
					{/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/> */}
					{/* <link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/> */}
					{/* <link rel="icon" href="/static/images/favicon.ico"/> */}
					{/* <script language="JavaScript" type="text/javascript" src="/static/js/scripts.js">
					</script> */}
					{/* <meta property="og:url" content={`https://weally.org`}/>
					<meta property="og:type" content="website"/>
					<meta property="og:title" content="Allied together, our complaints are powerful"/>
					<meta property="og:description" content="Make your complaint about any company visible to the entire world on WeAlly.org. We can finally look at the problems companies have with their customers, complain on WeAlly and join the responsible citizens"/>
					<meta property="og:image" content={'https://weally.org/static/images/fb_splash.jpg'}/> */}
					{this.props.styleTags}
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
        )
	}
}

MyDocument.getInitialProps = async ctx => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets()
	const sheet = new ServerStyleSheet()
	const originalRenderPage = ctx.renderPage

	const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
	)
	
	const styleTags = sheet.getStyleElement()

	// ctx.renderPage = () => originalRenderPage({
	// 	enhanceApp: App => props => sheets.collect(<App {...props} />),
	// })

	// const initialProps = await Document.getInitialProps(ctx)

	return {
		//...initialProps, // Styles fragment is rendered after the app and page rendering finish.
		...page,
		styleTags
		// styles: (
		// 	<Fragment>
		// 		{initialProps.styles}
		// 		{sheets.getStyleElement()}
		// 	</Fragment>
		// ),
	}
}

export default MyDocument