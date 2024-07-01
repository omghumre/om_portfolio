import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Box = styled(NavLink)`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
`

const BlogComponent = () => {
  return (
    <Box to="/">
        Blog Item
    </Box>
  )
}

export default BlogComponent