import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled(motion.li)`
    width: 60rem;
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
        width: 18rem;
        // margin-right: 20px;
        margin-left: 30px;
    }
`

const Title = styled.h2`
    font-size: calc(1.3em + 1.5vw);
    font-family: "Poppins", sans-serif;
`

const Subtitle = styled.h2`
    font-size: calc(1.2em + 0.5vw);
    font-family: "Poppins", sans-serif;
`

const Description = styled.p`
    font-size: calc(0.9em + 0.5vw);
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    flex-grow: 1;
    margin-top: 0.5rem;
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
    const { id, name, description, subtitle} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Description>{description}</Description>
            {/* <Tags>
                {tags.map((t, id) => (
                    <Tag key={id}>{t}</Tag>
                ))}
            </Tags> */}
            
        </Box>
    )
}

export default Wcard;
