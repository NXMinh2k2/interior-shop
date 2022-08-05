import React from 'react'
import '../../scss/index.scss'
import { Link } from 'react-router-dom'
import Mail from './Mail'
import Map from './Map'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-wrap">
            <div className='contact-title'>
                    <Link className='link' to='/'><span>Trang chủ</span></Link>
                    <span>Liên hệ</span>
            </div>
            <div className="contact-content">
            <Map />
            <Mail />
            </div>
        </div>
    </div>
  )
}

export default Contact
// googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyDz-V65JURbuUvXb-9lyK0rfffqeiJK5KM'}&callback=initMap`}
// loadingElement={<div style={{ height: `100%` }} />}
// containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
// mapElement={<div style={{ height: `100%` }} />}