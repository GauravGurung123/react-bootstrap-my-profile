import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import GalleryData from '../../app/datas/GalleryData'
import '../profile/profile.css'

export default function HomeGallery() {
  return (
    <>
      <Row className='display-6'>
        <Col>Photo Gallery</Col>
      </Row>
      <hr />
      <div className='col-12 p-0' style={{ overflow: `hidden` }}>
        <div className='row m-0'>
          {GalleryData.map((photo, index) => (
            <div className='col-4 p-0 item'>
              <Image
                key={photo.id}
                fluid
                src={`${photo.image}`}
                style={{ height: '100%', width: '100%', padding: '1px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
