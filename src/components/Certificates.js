import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import img from '../assets/Images/wall.jpg'
import AnchorComponent from '../subComponents/Anchor'
import { Certificate } from '../data/CertiData'
import CertiComponent from './CertiComponent'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
    position: relative;
    width: 100vw;
    min-height: 100vh; // Changed to min-height
    overflow: hidden;

    @media (max-width: 700px) {
        width: 100%;
        z-index: -1;
    }
`

const BackgroundImage = styled.div`
    background-image: url(${img}) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5; // To fade the background
    z-index: -1;
`

const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.7)`}; 
    width: calc(100% - 2rem); // Add space on left and right
    height: auto;
    position: relative;
    padding: 0 1rem 5rem; // Add padding on the sides and bottom
    margin: 0 auto; // Center the container

    @media (max-width: 700px) {
        padding: 0 0.5rem 5rem; // Adjust padding for smaller screens
    }
`

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;

    @media screen and (max-width: 768px) {
        padding-top: 2rem;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(15rem, 1fr)); // Adjusted for fixed width
    grid-gap: calc(1rem + 2vw);

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(15rem, 1fr)); // Adjusted for fixed width
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(15rem, 1fr)); // Adjusted for fixed width
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        overflow-y: hidden;

        & > div:first-child {
            margin-top: 5rem;
        }

        & > div:last-child {
            margin-bottom: 4rem;
        }
    }
`

const Certificates = () => {
    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumbers(parseInt(num));
    }, []);

    const regularBlogs = Certificate.filter(certi => certi.key !== 20);
    const specialBlogs = Certificate.filter(certi => certi.key === 20);

    return (
        <MainContainer
            variants={container}
            initial='hidden'
            animate='show'
            exit={{
                opacity: 0, transition: { duration: 0.5 }
            }}
        >
            <BackgroundImage />
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcon />
                <AnchorComponent numbers={numbers} />
                <Center>
                    <Grid>
                        {regularBlogs.map(certi => (
                            <CertiComponent key={certi.id} certi={certi} />
                        ))}
                        {specialBlogs.map(certi => (
                            <CertiComponent key={certi.id} certi={certi} />
                        ))}
                    </Grid>
                </Center>
                <BigTitle text="Certificates" top='10%' right='90%' />
                <BigTitle text="f i c a t e s" top='83%' right='30%' />
            </Container>
        </MainContainer>
    )
}

export default Certificates
