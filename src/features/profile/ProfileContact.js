/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './profile.css'
import { contact } from '../../app/datas/FormData'

import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa'

export default function ProfileContact() {
  return (
    <>
      <div class='row contact-container'>
        <div class='col-lg-12'>
          <div class='card card-shadow border-0 mb-4'>
            <div class='row'>
              <div class='col-lg-8'>
                <div class='contact-box p-4 bg-image'>
                  <h4 class='title'>Contact Me</h4>
                  <hr />
                  <form>
                    <div class='row'>
                      {contact.form.map((form, index) => {
                        return (
                          <div className={form.mainWrapper}>
                            <div className={form.wrapperClass} key={index}>
                              {form.type !== 'submit' && (
                                <label htmlFor={form.type}>{form.label}</label>
                              )}
                              <input
                                type={form.type}
                                className={form.className}
                                id={form.type}
                                aria-describedby='emailHelp'
                                placeholder={form.placeholder}
                              />
                            </div>
                          </div>
                        )
                      })}

                      <div class='col-lg-12'>
                        <button
                          type='submit'
                          class='btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3'
                        >
                          <span>
                            {' '}
                            SUBMIT NOW <i class='ti-arrow-right'></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class='col-lg-4 bg-image'>
                <div class='detail-box p-4'>
                  <h5 class='text-white font-weight-light mb-3'>ADDRESS</h5>
                  <p class='text-white op-7'>
                    601 Sherwood Ave.
                    <br /> San Bernandino
                  </p>
                  <h5 class='text-white font-weight-light mb-3 mt-4'>
                    CALL US
                  </h5>
                  <p class='text-white op-7'>
                    251 546 9442
                    <br /> 630 446 8851
                  </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='display-6  text-dark text-center '>
          Location <hr />{' '}
        </p>
        <hr />
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.561497675151!2d85.31885831439523!3d27.730822231068235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19225bd78db9%3A0xb57c82a08d2dfd98!2z4KSw4KS-4KSo4KWA4KSs4KS-4KSw4KWAIOCkquCkvuCksOCljeCklSAtIOCkuOCkvuCkruClgeCkpuCkvuCkr-Ckv-CklSDgpLXgpKg!5e0!3m2!1sne!2snp!4v1632365901447!5m2!1sne!2snp'
          style={{ padding: '20px', height: '240px', marginTop: '-15px' }}
          allowfullscreen=''
          loading='lazy'
        ></iframe>
      </div>
    </>
  )
}
