import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import GalleryData from '../../app/datas/GalleryData'

export default function ProfileGallery() {
  return (
    <>
      <Row className='display-4 p-2 mb-54'>
        <Col>Photo Gallery</Col>
      </Row>
      <hr />
      <div className='col-12'>
        <div className='row m-0'>
          {GalleryData.map((photo, index) => (
            <div className='col-4' key={photo.id}>
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
        </div>
      </div>
    </>
  )
}
