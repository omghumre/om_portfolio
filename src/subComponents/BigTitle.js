import React from 'react'
import styled, { keyframes } from 'styled-components'


const Text = styled.h1`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    color: ${props => `rgba(${props.theme.textRgba},0.1)`};
    font-size: calc(5rem + 2vw);
    z-index: 1;
    font-weight: 1000;
    cursor: pointer;
    writing-mode: vertical-lr;
    text-orientation: upright;
    
`


const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
        {props.text}
    </Text>
  )
}

export default BigTitle