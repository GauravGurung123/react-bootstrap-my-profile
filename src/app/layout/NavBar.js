import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBar({ navigations }) {
  return (
    <Navbar className='sticky-top' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to='/' exact>
          MyLogo
        </Navbar.Brand>
        <>
          <Nav className='me-auto'>
            {navigations.map(navigation => {
              return <Menu navigation={navigation} key={navigation} />
            })}
          </Nav>
        </>
      </Container>
    </Navbar>
  )
}

const Menu = ({ navigation }) => (
  <Nav.Link as={NavLink} to={`/${navigation.link}`} exact>
    {navigation.title}
  </Nav.Link>
)
