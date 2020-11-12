import { Fragment } from 'react'
import Document, {Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'

class MyDocument extends Document {

	static async getInitialProps(ctx) {
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

	render() {
		return (
			<Html>
				<Head>
					{/* PWA primary color */}
					{/* <meta name="theme-color" content={theme.palette.primary.main}/> */}
					{/* <link rel="icon" href="/static/images/favicon.ico"/> */}
					{/* <meta property="og:url" content={`https://weally.org`}/>
					<meta property="og:type" content="website"/>
					<meta property="og:title" content="Allied together, our complaints are powerful"/>
					<meta property="og:description" content="Make your complaint about any company visible to the entire world on WeAlly.org. We can finally look at the problems companies have with their customers, complain on WeAlly and join the responsible citizens"/>
					<meta property="og:image" content={'https://weally.org/static/images/fb_splash.jpg'}/> */}
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet" />
					{this.props.styleTags}
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
        )
	}
}

export default MyDocument