import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import './profile.css'
import GalleryData from '../../app/datas/GalleryData'

export default function ProfileGallery() {
  return (
    <>
      <Row className='display-4 p-2 mb-54 '>
        <Col>Photo Gallery</Col>
      </Row>
      <hr />
      <div className='row mt-4'>
        {/* <div className='row m-0'> */}
        {GalleryData.map((photo, index) => (
          <div className='item col-sm-6 col-md-4 mb-3' key={photo.id}>
            <a
              href={`${photo.image}`}
              className='fancybox'
              data-fancybox='gallery1'
            >
              <Image
                src={`${photo.image}`}
                style={{ height: '320px', width: '360px', padding: '1px' }}
              />
            </a>
          </div>
        ))}
        {/* </div> */}
      </div>
    </>
  )
}
