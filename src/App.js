import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { DarktTheme, lightTheme } from "./components/Themes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import Certificates from "./components/Certificates";
import ProjectPage from "./components/ProjectPage";



function App() {
  return <>
    
  <GlobalStyle/>
  <ThemeProvider theme={lightTheme}>
  
 

  <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/blog" element={<BlogPage/>} />
    <Route path="/work" element={<WorkPage/>} />
    <Route path="/projects" element={<ProjectPage/>} />
    <Route path="/certificates" element={<Certificates/>} />
    <Route path="/skills" element={<MySkillsPage/>} />


  </Routes>



  </ThemeProvider>
    
    
    
    
    

    </>
    
}

export default App

