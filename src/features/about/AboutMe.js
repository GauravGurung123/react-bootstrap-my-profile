import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

export default function AboutMe() {
  return (
    <>
      <Row className='text-center'>
        <h2>About Me</h2>
      </Row>
      <Row className='mt-5'>
        <Col sm={8}>
          <h3>Who i am</h3>
          <p class='font-weight-light text-justify'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </Col>
        <Col sm={4}>
          <Image
            src='https://www.maxpixel.net/static/photo/1x/User-Man-Head-The-Dummy-Avatar-Jacket-Tie-Foot-659652.png'
            alt='no photo'
            style={{ height: '300px', width: '300px' }}
          />
        </Col>
      </Row>
    </>
  )
}
