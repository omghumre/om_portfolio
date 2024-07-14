import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'

import {Blogs} from '../data/BlogData'
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from '../subComponents/BigTitle'
import { Opacity } from '@tsparticles/engine'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
    background-image: url(${img}) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`}; 
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`

const container = {
  hidden: {Opacity:0},
  show: {
    opacity:1,

    transition:{
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
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`



const BlogPage = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num))
  }, []);

  return (
    <MainContainer 
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
        opacity: 0, transition:{duration: 0.5}
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcon/>
        <AnchorComponent numbers={numbers} />
      <Center>
      <Grid>
        {
          Blogs.map(blog => {
              return <BlogComponent key={blog.id} blog={blog} />
              // return <ThreeDCardDemo key={blog.id} blog={blog} />
          })
        }
      </Grid>
      
      </Center>
      <BigTitle text="BLOG" top='10%' right='80%' />
        <BigTitle text="BL OG" top='60%' right='5%' />
      </Container>
    </MainContainer>
  )
}

export default BlogPage
