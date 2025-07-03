"use client"
import React from "react"
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps'

type propsType = {
  lat: number,
  lng: number
}
const GoogleMapComponent = ({lat, lng}:propsType) => {
  const apikey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

  if(!apikey) {
    return <p>Google Maps APIキーが見つかりません</p>
  }

  if(lat===null || lng === null) {
    return <p>位置情報が未設定です</p>
  }

  return (
  <APIProvider apiKey={apikey}>
    <Map
      className="googleMapContainer"
      defaultCenter={{lat, lng}}
      defaultZoom={13}
      gestureHandling='greedy'
      disableDefaultUI={true}
    >
      <Marker position={{lat, lng}} />
    </Map>
  </APIProvider>
  )
}

export default GoogleMapComponent
