import { Amplify } from 'aws-amplify'
import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default App
