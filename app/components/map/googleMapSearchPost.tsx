import {Dispatch, SetStateAction} from 'react'
import { AllItemTypes } from '@/utils/types/post';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import PoiMarkers from './poiMarkers';

type Props = {
  allItems: AllItemTypes[];
  defaultZoom: number;
  defaultCenter: {
    lat: number;
    lng: number;
  };
  currentPin: AllItemTypes | null;
  setCurrentPin: Dispatch<SetStateAction<AllItemTypes | null>>;
}

const GoogleMapSearchPost = ({allItems, defaultZoom, defaultCenter, currentPin, setCurrentPin}:Props) => {


  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string}
          className='googleMapSearchContent'
          defaultZoom={defaultZoom}
          defaultCenter={ defaultCenter }
          onCameraChanged={ (ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }>
          <PoiMarkers allItems={allItems} setCurrentPin={setCurrentPin}/>
      </Map>
    </APIProvider>
  )
}

export default GoogleMapSearchPost
