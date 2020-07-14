import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
// import theme from '../src/theme';

class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap" />
					{/* PWA primary color */}
					{/* <meta name="theme-color" content={theme.palette.primary.main}/> */}
					{/* <link rel="icon" href="/static/images/favicon.ico"/> */}
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
	const styledComponentSheet = new StyledComponentSheets()
	const materialUiSheets = new MaterialUiServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props =>
				styledComponentSheet.collectStyles(
					materialUiSheets.collect(<App {...props} />),
				),
			})
		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: [
				<Fragment key="styles">
					{initialProps.styles}
					{materialUiSheets.getStyleElement()}
					{styledComponentSheet.getStyleElement()}
				</Fragment>,
			],
		}
	} finally {
		styledComponentSheet.seal()
	}
}

export default MyDocument