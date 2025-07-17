import { useState } from 'react';
import { AllItemTypes } from '@/utils/types/post';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import PoiMarkers from './poiMarkers';


type Props = {
  allItems: AllItemTypes[]
}

const GoogleMapSearchPost = ({allItems}:Props) => {

  const [currentPin, setCurrentPin] = useState<AllItemTypes | null>(null)

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string}
          style={{ width: '600px', height: '500px' }}
          defaultZoom={12}
          defaultCenter={ { lat: 21.2806084, lng: -157.8141057 } }
          onCameraChanged={ (ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }>
          <PoiMarkers allItems={allItems} setCurrentPin={setCurrentPin}/>
      </Map>
      {currentPin && (
        <h1>{currentPin.title}</h1>
      )}
    </APIProvider>
  )
}

export default GoogleMapSearchPost
