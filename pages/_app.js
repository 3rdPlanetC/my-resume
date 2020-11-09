import { Fragment } from 'react'
import { CssBaseline } from '@material-ui/core'

const App = ({ Component, pageProps }) => {
    return (
		<Fragment>
			<CssBaseline/>
			<Component {...pageProps} />
		</Fragment>
    )
}
  
export default App