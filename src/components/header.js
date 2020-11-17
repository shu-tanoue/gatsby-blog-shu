import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import Styled from "styled-components"
import { ImHome } from "react-icons/im"
export default () => {
  return (
    <Container>
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <ImHome color="rgb(0,123,255)" size="2em" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <ul className="navbar-nav">
                <li>
                  <Link
                    to="/blog/"
                    className="nav-link"
                    partiallyActive={true}
                    activeClassName="active"
                  >
                    Shu(Blog)
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
      <hr />
    </Container>
  )
}

const Styles = Styled.div`


.FaToilet{
  background:rgba(0,0,0,0.4)
}

`
