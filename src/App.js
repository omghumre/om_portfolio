import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { DarktTheme, lightTheme } from "./components/Themes"

function App() {
  return <>
    
  <GlobalStyle/>
  <ThemeProvider theme={DarktTheme}>
  App File
  </ThemeProvider>
    
    
    
    
    

    </>
    
}

export default App

