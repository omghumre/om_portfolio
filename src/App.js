import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './index.css';

import SoundBar from "./subComponents/SoundBar";

import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy, useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";

const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const Certificates = lazy(() => import("./components/Certificates"));
const ProjectPage = lazy(() => import("./components/ProjectPage"));
const Resume = lazy(() => import("./components/Resume"));

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [loading]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence mode='wait'>
          {loading ? (
            <LoadingPage onLoadingComplete={handleLoadingComplete} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Main />
                  </Suspense>
                } />
                <Route path="/resume" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Resume />
                  </Suspense>
                } />
                <Route path="/about" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <AboutPage />
                  </Suspense>
                } />
                <Route path="/blog" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <BlogPage />
                  </Suspense>
                } />
                <Route path="/work" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <WorkPage />
                  </Suspense>
                } />
                <Route path="/projects" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProjectPage />
                  </Suspense>
                } />
                <Route path="/certificates" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Certificates />
                  </Suspense>
                } />
                <Route path="/skills" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <MySkillsPage />
                  </Suspense>
                } />
                <Route path="*" element={<Main />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
