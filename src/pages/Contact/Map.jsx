import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"

const Map = () => {
  return (
    <div className='contact-map'>
         <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        </GoogleMap>
        <div>
          <p>NHANH.VN</p>
          <p>Địa chỉ: 102 Thái Thịnh, Trung Liệt, Đống Đa, Hà Nộis</p>
          <p>Hotline:  19002812</p>
        </div>
    </div>
  )
}

export default withScriptjs(withGoogleMap(Map));

