import React from 'react'
import Slider from './Slider'
import HomeGallery from './HomeGallery'
import { Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'

export default function HomePage() {
  return (
    <>
      <Row className='mt-5'>
        <Col sm={8}>
          <Slider />
          <HomeGallery />
        </Col>
        <Col sm={4}>
          <Sidebar />
        </Col>
      </Row>
    </>
  )
}
