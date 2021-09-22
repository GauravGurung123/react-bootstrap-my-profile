import React from 'react'
import NavBar from './NavBar'
import { Footer } from './Footer'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../features/home/HomePage'
import ProfilePage from '../../features/profile/ProfilePage'
import AboutPage from '../../features/about/AboutPage'
import ProfileContact from '../../features/profile/ProfileContact'
import ProfileGallery from '../../features/profile/ProfileGallery'
import NavDatas from '../datas/NavDatas'
import { useState, useEffect } from 'react'
import RegistrationForm from '../../features/user/RegistrationForm'

function App() {
  const [navigations, setNavigation] = useState(NavDatas)

  return (
    <>
      {/* <Route
        path={'/(.+)'}
        render={() => (
          <> */}
      <NavBar navigations={navigations} />
      <Container style={{ marginTop: '3em' }} className='bg-light'>
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route path='/profile' component={ProfilePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ProfileContact} />
          <Route path='/gallery' component={ProfileGallery} />
          <Route path='/registration' component={RegistrationForm} />
        </Switch>
      </Container>
      <Footer />
      {/* </>
        )}
      /> */}
    </>
  )
}

export default App
