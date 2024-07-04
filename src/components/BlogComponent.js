import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import styled from 'styled-components';

const Box = styled.div`
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
    z-index: 5;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateZ(50px);
        background-color: transparent;
        backdrop-filter: blur(20px); 
        background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.4),
        rgba(0, 0, 0, 0.3)
        
    );
    background-size: 10px ;
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

    ${Box}:hover & {
        transform: translateZ(50px);
    }
`;

const HashTag = styled.div`
    padding: 0.5rem 0;
    transition: transform 0.3s ease;

    ${Box}:hover & {
        transform: translateZ(50px);
    }
`;

const Tag = styled.span`
    padding-right: 0.5rem;
    transition: transform 0.3s ease;

    ${Box}:hover & {
        transform: translateX(30px);
    }
`;

const Date = styled.span`
    padding: 0.5rem 0;
    transition: transform 0.3s ease;

    ${Box}:hover & {
        transform: translateZ(50px);
    }
`;

const Title = styled.h3`
    color: inherit;
    padding: 0.5rem 0;
    padding-top: 1rem;
    font-family: 'Karla', sans-serif;
    font-weight: 700;    
    border-bottom: 1px solid ${props => props.theme.text};
    transition: transform 0.3s ease;

    ${Box}:hover & {
        transform: translateZ(50px);
    }
`;

function ThreeDCardDemo(props) {
  const { name, tags, date, imgSrc, link } = props.blog;

  return (
    <CardContainer className="inter-var">
      <Box>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          {/* Title */}
          <CardItem translateZ={50} className="text-xl font-bold text-neutral-600 dark:text-white">
            <Title>{name}</Title>
          </CardItem>

          {/* Hashtags and Date */}
          <CardItem as="p" translateZ={50} className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            <HashTag>
              {tags.map((t, id) => <Tag key={id}>#{t}</Tag>)}
            </HashTag>
            <Date>{date}</Date>
          </CardItem>

          {/* Image */}
          <CardItem translateZ={50}>
            <Image img={imgSrc} className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
          </CardItem>

          {/* Visit button */}
          <div className="flex justify-between items-center mt-20">
            <CardItem as="a" href={link} target="__blank" translateZ={50} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
              Try now →
            </CardItem>
          </div>
        </CardBody>
      </Box>
    </CardContainer>
  );
}

export default ThreeDCardDemo;
