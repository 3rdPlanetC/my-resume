import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    status: {
      danger: orange[500],
    },
})

export default ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}