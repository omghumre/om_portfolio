import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Box = styled(NavLink)`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
`

const Image = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 60%;
    background-size: cover;
    border: 1px solid transparent;
    background-position: center center;
}
`


const BlogComponent = (props) => {

    const {name, tags, date, imgSrc, link} = props.blog;

    return (
    <Box target="_blank"  to={{pathname: link}}>
        <Image img={imgSrc} /> 
    </Box>
    )
}

export default BlogComponent