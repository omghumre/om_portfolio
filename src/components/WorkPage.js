
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcon";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Wcard";

import BigTitlte from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: auto;
  position: relative;
  display: flex;
  // flex-direction: column;
  align-items: center;
  overflow: hidden;
  scroll-behavior: smooth;
  padding-bottom: 7rem;
  margin-right: 0rem;

  @media screen and (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 10rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const Main = styled(motion.ul)`
  position: relative;
  height: auto;
  top: 10rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    top: 5rem;
  }
`;


// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main  variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <BigTitlte text="WORK" top="10%" right="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
