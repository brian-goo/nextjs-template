import React, { useEffect } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import { StoreProvider } from "../src/Store"
import {useStore, useDispatch} from "../src/Store"
import useTheme from "../src/useTheme"
import { Title } from "../src/components"

function withContext(Component) {
  return (props) => (
    <StoreProvider>
      <Component {...props} />
    </StoreProvider>
  )
}

function Application({ Component, pageProps }) {
  const {store: {themeColor}} = useStore()
  const theme = useTheme(themeColor)
  
  useEffect(() => {
    const jssStyles = document.querySelector(`#jss-server-side`)
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  
  return (
    <>
      <Title />
      {/* <StoreProvider> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </StoreProvider> */}
    </>
  )
}

export default withContext(Application)
// export default Application