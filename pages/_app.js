// core
import { useState } from 'react'
// library
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { orange, purple, green } from '@material-ui/core/colors'

const darkTheme = createMuiTheme({
    body: {
        color: "white",
        background: "#1c1c27"
    },
    leftbar: {
        color: "white",
        background: "#28293d"
    },
    center: {
        color: "white",
        background: "#28293d"
    },
    rightbar: {
        color: "white",
        background: "#28293d"
    },
    topbar: {
        color: "white",
        background: "#28293d"
    }

    // palette: {
    //     primary: {
    //       main: purple[500],
    //     },
    //     secondary: {
    //       main: green[500],
    //     },
    // },
})

const lightTheme = createMuiTheme({
    body: {
        color: "#1d2129",
        background: "#e9ebee"
    },
    leftbar: {
        color: "black",
        background: "#e5e5e5"
    },
    center: {
        color: "black",
        background: "#e5e5e5"
    },
    rightbar: {
        color: "black",
        background: "#e5e5e5"
    },
    topbar: {
        color: "black",
        background: "#e5e5e5"
    }

    // palette: {
    //     primary: {
    //       main: purple[500],
    //     },
    //     secondary: {
    //       main: green[500],
    //     },
    // },
})

export default ({ Component, pageProps }) => {
    const [theme, setTheme] = useState(true)
    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Component {...pageProps} setTheme={setTheme}/>
        </ThemeProvider>
    )
}