import React from 'react'
import { Row, Card } from 'react-bootstrap'
import Typed from 'react-typed'

export default function ProfilePage() {
  return (
    <>
      <Row>
        <Card
          className='text-white text-center '
          style={{ borderStyle: 'none' }}
        >
          <Card.Img
            src='https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            alt='Card image'
            style={{ height: '720px', width: 'auto' }}
          />
          <Card.ImgOverlay>
            <Card.Title className='pt-5'>
              Hello, Awesome People
              <br />
              <h1>Welcome to my profile</h1>
            </Card.Title>
            <Card.Text className='pt-5'>
              <Typed
                className='typed-text'
                strings={['Web Design', 'Web Development']}
                typeSpeed={60}
                backSpeed={80}
                loop
              />
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Row>
    </>
  )
}
