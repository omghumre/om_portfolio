import React from 'react'
import styled from 'styled-components'

import configDark from "../config/particlesjs-config.json"
import configLight from "../config/particlesjs-config-light.json"
import SparklesPreview from '../test'

const Box = styled.div`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    height: auto;
`


const ParticleComponent = (props) => {
  return (
    <Box>
        <SparklesPreview style={{position:'absolute', top:0 }} params={props.theme === "light" ? configLight : configDark}  />
    </Box>
  )
}

export default ParticleComponent