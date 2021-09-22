import React from 'react'
import UserDatas from '../../app/datas/UserDatas'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'

export default function Slider() {
  const [people, setPeople] = useState(UserDatas)
  const [index, setIndex] = useState(0)

  console.log(people)
  return (
    <>
      <Carousel fade>
        {people.map(person => (
          <Carousel.Item key={person.id} interval={1000}>
            <img
              className='d-block w-100'
              src={`${person.imageURL}`}
              style={{ height: '400px', width: '400px' }}
              alt={person.title}
            />
            <Carousel.Caption>
              <h3>{person.title}</h3>
              <p>{person.bio}.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <hr />
    </>
  )
}
