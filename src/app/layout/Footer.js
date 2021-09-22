import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: 'relative',
    top: '50vh',
    width: '100%',
    // border: '2px solid red',
  }
  return (
    <footer className='bg-primary text-light py-3' style={footerStyle}>
      <p className='text-center'>Copyright &copy; MyProfile.com</p>
    </footer>
  )
}
