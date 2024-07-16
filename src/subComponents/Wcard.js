import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled(motion.li)`
    width: 30rem;
    height: auto;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 4rem;
    margin-bottom: 4rem;
    border-radius: 0px 25px 0px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-10px) scale(1.05);
    }

    @media (max-width: 768px) {
        margin-right: 20px;
        margin-left: 20px;
    }
`

const Title = styled.h2`
    font-size: calc(1em + 0.5vw);
`

const Description = styled.p`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    flex-grow: 1;
    margin-top: 0.5rem;
`

const Tags = styled.div`
    border-top: 2px solid ${props => props.theme.body};
    padding-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    
    ${Box}:hover & {
        border-top: 2px solid ${props => props.theme.text};
    }
`

const Tag = styled.span`
    margin-right: 1rem;
    font-size: calc(0.8em + 0.3vw);
`

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
}

const Wcard = (props) => {
    const { id, name, description, tags, demo, github } = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Tags>
                {tags.map((t, id) => (
                    <Tag key={id}>#{t}</Tag>
                ))}
            </Tags>
            
        </Box>
    )
}

export default Wcard;
