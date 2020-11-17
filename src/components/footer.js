import React from "react"
import { Container } from "react-bootstrap"
// import { Link } from "gatsby"
import Styled from "styled-components"

export default () => {
  return (
    <Container className="text-center">
      <Styles>
        <hr />
        <p>©{new Date().getFullYear()}, Shu portfolio</p>
      </Styles>
    </Container>
  )
}

const Styles = Styled.div`

.text-center{
  background-color:rgba(0,0,255,0.4)
  
}

`
