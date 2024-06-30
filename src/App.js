import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { DarktTheme, lightTheme } from "./components/Themes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import Education from "./components/Education";
import ProjectPage from "./components/ProjectPage";

function App() {
  return <>
    
  <GlobalStyle/>
  <ThemeProvider theme={lightTheme}>
  
 <switch> 
<Router>
  <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/blog" element={<BlogPage/>} />
    <Route path="/work" element={<WorkPage/>} />
    <Route path="/projects" element={<ProjectPage/>} />
    <Route path="/education" element={<Education/>} />
    <Route path="/skills" element={<MySkillsPage/>} />


  </Routes>
</Router>
</switch>

  </ThemeProvider>
    
    
    
    
    

    </>
    
}

export default App

