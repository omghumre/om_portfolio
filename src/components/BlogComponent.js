import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Box = styled(motion(NavLink))`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    backdrop-filter: blur(4px);
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    z-index: 3;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;

    &:hover {
        color: ${props => props.theme.body};
        transform: translateZ(30px);
        background-color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.body};
        box-shadow: 5px 5px 10px ${props => props.theme.text};
    }
`;

const Image = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 20vh;
    background-size: cover;
    border: 1px solid transparent;
    border-radius: 10px;
    background-position: center center;
    transition: transform 0.3s ease;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    transform-style: preserve-3d;

    ${Box}:hover & {
        border:1px solid ${props => props.theme.body};
    }
`;

const HashTag = styled.div`
    padding: 0.5rem 0;
    transition: transform 0.3s ease;
    transform-style: preserve-3d;
`;

const Tag = styled.span`
    padding-right: 0.5rem;
    transition: transform 0.3s ease;
    transform-style: preserve-3d;
`;

const Date = styled.span`
    padding: 0.5rem 0;
    transition: transform 0.3s ease;
    padding-bottom: 0.5rem;
    transform-style: preserve-3d;
`;

const Title = styled.h3`
    color: inherit;
    padding: 0.5rem 0;
    padding-top: 0.5rem;
    font-family: 'Karla', sans-serif;
    font-weight: 700;    
    border-bottom: 1px solid ${props => props.theme.text};
    transition: transform 0.3s ease;
    transform-style: preserve-3d;

    ${Box}:hover & {
        border-bottom:1px solid ${props => props.theme.body};
    }
`;

const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
};

function ThreeDCardDemo(props) {
    const { name, tags, date, imgSrc, link } = props.blog;

    return (
        <CardContainer
            className="inter-var"
            variants={Item}
            initial="hidden"
            animate="show"
        >
            <Box to={link}>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    {/* Title */}
                    <CardItem translateZ={50} transformStyle="preserve-3d" className="text-xl font-bold text-neutral-600 dark:text-white">
                        <Title>{name}</Title>
                    </CardItem>

                    {/* Hashtags and Date */}
                    <CardItem translateZ={40} transformStyle="preserve-3d" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        <HashTag>
                            {tags.map((t, id) => <Tag key={id}>#{t}</Tag>)}
                        </HashTag>
                        <Date>{date}</Date>
                    </CardItem>

                    {/* Image */}
                    <CardItem translateZ={60} transformStyle="preserve-3d">
                        <Image img={imgSrc} className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
                    </CardItem>
                </CardBody>
            </Box>
        </CardContainer>
    );
}

export default ThreeDCardDemo;
