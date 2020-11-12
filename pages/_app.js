import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
	typography: {
		"fontFamily": `"Inconsolata", monospace`,
		// "fontSize": 14,
		// "fontWeightLight": 300,
		// "fontWeightRegular": 400,
		// "fontWeightMedium": 500
	},
})

const App = ({ Component, pageProps }) => {
    return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline/>
			<Component {...pageProps} />
		</MuiThemeProvider>
    )
}
  
export default App