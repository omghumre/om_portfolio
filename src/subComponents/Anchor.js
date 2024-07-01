import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
`

const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;

`


const Anchor = () => {

    const ref = useRef(null); 
    const hiddenRef = useRef(null); 

    return (
    <Container>
        <Slider ref = {ref}>
            {
                [...Array(25)].map((x,id) => {
                    reutrn <Link key={id} width={25} height={25} fill='currentColor' className="chain" />
                })
            }
            
        </Slider>
    </Container>
  )
}

export default Anchor