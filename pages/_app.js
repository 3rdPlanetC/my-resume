// core
import { useState, Fragment } from 'react'
// library
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
// style
import { indigo, amber, white, brown, lightGreen } from '../style/config'

const useTheme = () => {
    const storeTheme = [indigo, amber, white, brown, lightGreen].map(theme => {
        return createMuiTheme({
            body: {
                color: theme.bodyColor,
                background: theme.bodyBackground
            },
            grid: {
                background: theme.gridBackground
            },
            palette: {
                primary: {
                    main: theme.bodyBackground,
                },
            },
            overrides: {
                MuiAvatar: {
                    colorDefault: {
                        backgroundColor: theme.bodyBackground
                    },
                },
                MuiPaper: {
                    root: {
                        color: theme.bodyColor
                    }
                }
            },
        })
    })
    return storeTheme
}

export default ({ Component, pageProps }) => {
    // useTheme
    const storeTheme = useTheme()
    // useState
    const [theme, setTheme] = useState(storeTheme[0])
    // functions
    const randomTheme = () => {
        const newTheme = storeTheme[Math.floor(Math.random() * storeTheme.length)]
        const indexTheme = storeTheme.indexOf(newTheme)
        setTheme(prevTheme => {
            if (indexTheme === storeTheme.indexOf(prevTheme)) {
                switch (indexTheme) {
                    case 0:
                        return storeTheme[storeTheme.length - 1]
                    default:
                        return storeTheme[indexTheme - 1]
                }
            } else {
                return newTheme
            }
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} randomTheme={randomTheme} theme={theme} />
        </ThemeProvider>
    )
}