import React, { useRef } from 'react'
import styled from 'styled-components'
import { Anchor, chain } from '../components/Allsvg'
import { Link } from 'react-router-dom'

const Container = styled.div`
    position: relative;
`

const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;

`


const AnchorComponent = () => {

    const ref = useRef(null); 
    const hiddenRef = useRef(null); 

    return (
    <Container>
        <Slider ref = {ref}>
            {
                [...Array(25)].map((x,id) => {
                    return <Link key={id} width={25} height={25} fill='currentColor' className="chain" />
                })
            }
            <Anchor width={70} height={70} fill='currentColor'  />
        </Slider>
    </Container>
  )
}

export default AnchorComponent