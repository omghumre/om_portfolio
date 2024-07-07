import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { DarktTheme, lightTheme } from "./components/Themes"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './index.css';
import {Switch} from "react-router-dom";

import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import Certificates from "./components/Certificates";
import ProjectPage from "./components/ProjectPage";
import { AnimatePresence } from "framer-motion";



function App() {

  const location = useLocation();

  return <>
    
  <GlobalStyle/>
  <ThemeProvider theme={lightTheme}>
  
 
<AnimatePresence mode='wait'>

  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Main/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/blog" element={<BlogPage/>} />
    <Route path="/work" element={<WorkPage/>} />
    <Route path="/projects" element={<ProjectPage/>} />
    <Route path="/certificates" element={<Certificates/>} />
    <Route path="/skills" element={<MySkillsPage/>} />
  </Routes>

  </AnimatePresence>


  </ThemeProvider>
    
    
    
    
    

    </>
    
}

export default App

