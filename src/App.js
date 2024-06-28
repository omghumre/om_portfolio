import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { lightTheme } from "./components/Themes"

function App() {
  return <>
    
  <GlobalStyle/>
  <ThemeProvider theme={lightTheme}>
  App File
  </ThemeProvider>
    
    
    
    
    

    </>
    
}

export default App

