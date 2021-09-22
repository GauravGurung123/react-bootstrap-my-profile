import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa'

export default function Sidebar() {
  return (
    <>
      <Row className='justify-content-md-center'>
        <Col md='auto'>
          <Image
            className='mt-5 mb-2'
            src='https://images.squarespace-cdn.com/content/v1/5475f6eae4b0821160f6ac3e/1615839116350-308WIL9BKZS8SUF95SM6/study+with+me+video?format=1000w'
            roundedCircle
            style={{ width: '180px', height: '165px' }}
          />
          <p class='h4'>Prabin Shrestha</p>

          <p class='h6 '>Follow me</p>

          <ul className='contactCircles'>
            <li>
              <FaFacebookF className='contactIcon' />
            </li>
            <li>
              <FaTwitter className='contactIcon' />
            </li>
            <li>
              <FaPinterest className='contactIcon' />
            </li>
            <li>
              <FaInstagram className='contactIcon' />
            </li>
          </ul>
        </Col>
      </Row>
    </>
  )
}
