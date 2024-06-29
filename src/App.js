import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { DarktTheme, lightTheme } from "./components/Themes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";

function App() {
  return <>
    
  <GlobalStyle/>
  <ThemeProvider theme={lightTheme}>
  
<Router>
  <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/blog" element={<BlogPage/>} />
    <Route path="/work" element={<WorkPage/>} />
    <Route path="/skills" element={<MySkillsPage/>} />

  </Routes>
</Router>
    

  </ThemeProvider>
    
    
    
    
    

    </>
    
}

export default App

