import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 8rem;
    top: 3rem;
    z-index: 10;
`

const SoundBar = () => {
  return (
    <Box>
        Sound

        <audio src=""></audio>
    </Box>
  )
}

export default SoundBar