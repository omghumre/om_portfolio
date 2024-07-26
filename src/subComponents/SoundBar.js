import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import music from "../assets/audio/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse).mp3"
import svgIcon from "../assets/svg/music.svg"; // Replace with your SVG file path

const Box = styled.div`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 14rem;
    top: 3rem;
    z-index: 10;

    &>*:nth-child(1){
        animation-delay: 0.2s;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
    }
    &>*:nth-child(3){
        animation-delay: 0.4s;
    }
    &>*:nth-child(4){
        animation-delay: 0.6s;
    }
    &>*:nth-child(5){
        animation-delay: 0.8s;
    }

    @media screen and (max-width: 700px){
        transform: translateY(0px);
        top: 2.5rem;
        left: calc(60%);
        position: fixed;
        align-items: center;
    }
`

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    100%{
        transform: scaleY(1);
    }
`

const Line = styled.span`
    background: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.body};
    animation: ${play} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};
    height: 1rem;
    width: 4px;
    margin: 0 0.1rem;
`

const Icon = styled.img`
    height: 1.5rem; // Adjust as necessary
    width: 1.5rem; // Adjust as necessary
`

const SoundBar = () => {
    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

    return (
        <Box onClick={handleClick}>
            {click ? (
                <>
                    <Line click={click} />
                    <Line click={click} />
                    <Line click={click} />
                    <Line click={click} />
                    <Line click={click} />
                </>
            ) : (
                <Icon src={svgIcon} alt="Music Icon" />
            )}
            <audio src={music} ref={ref} loop />
        </Box>
    )
}

export default SoundBar
