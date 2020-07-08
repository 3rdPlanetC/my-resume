// core
import { useState } from 'react'
// library
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
    body: {
        color: "white",
        background: "#1c1c27"
    },
    grid: {
        background: "#28293d"
    },
    palette: {
        primary: {
            main: "#28293d",
        },
    },
    overrides: {
        MuiAvatar: {
            colorDefault: {
                backgroundColor: "#28293d"
            },
        },
    },
})

const lightTheme = createMuiTheme({
    body: {
        color: "#1d2129",
        background: "#e9ebee"
    },
    grid: {
        background: "#e5e5e5"
    },
    palette: {
        primary: {
            main: "#28293d",
        },
    },
})

export default ({ Component, pageProps }) => {
    const [theme, setTheme] = useState(true)
    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Component {...pageProps} setTheme={setTheme} theme={theme ? darkTheme : lightTheme} />
        </ThemeProvider>
    )
}