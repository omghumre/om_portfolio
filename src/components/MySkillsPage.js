import React from 'react'
import styled, { ThemeProvider } from 'styled-components'


const Box=styled.div`
  
`

const MySkillsPage = () => {
  return (

    <ThemeProvider theme={lightTheme}> 
    <Box>
      MySkillsPage Component/Page
    </Box>
    </ThemeProvider>

  )
}

export default MySkillsPage
