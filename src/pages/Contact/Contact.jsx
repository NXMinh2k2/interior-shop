import React from 'react'
import '../../scss/index.scss'
import { Link } from 'react-router-dom'
import Mail from './Mail'
import Map from './Map'

const Contact = () => {
  const key = 'AIzaSyBMW9Fqw50i5YU-aLRcrNs0bhRCEYDDm6g'
  return (
    <div className='contact'>
        <div className="contact-wrap">
            <div className='contact-title'>
                    <Link className='link' to='/'><span>Trang chủ</span></Link>
                    <span>Liên hệ</span>
            </div>
            <div className="contact-content">
            <Map 
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `20vh`, margin: `auto`, border: '2px solid black' }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <Mail />
            </div>
        </div>
    </div>
  )
}

export default Contact
