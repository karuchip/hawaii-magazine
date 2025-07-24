import { AllItemTypes } from '@/utils/types/post';
import {AdvancedMarker, Pin, useMap} from '@vis.gl/react-google-maps';
import { useEffect, useState, useRef, useCallback, Dispatch, SetStateAction } from 'react';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import type {Marker} from '@googlemaps/markerclusterer';



type Props = {
  allItems: AllItemTypes[]
  currentPin: AllItemTypes | null;
  setCurrentPin: Dispatch<SetStateAction<AllItemTypes | null>>
}

const PoiMarkers = ({allItems, currentPin, setCurrentPin}:Props) => {


  // マーカークラスタリング
  const map = useMap()
  const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
  const clustere = useRef<MarkerClusterer | null>(null);

  // PoiMarkers コンポーネントでも MarkerClusterer のインスタンスを作成し、マーカー クラスタを表示したい Map のインスタンスを渡す
  useEffect(() => {
    if(!map) return
    if (!clustere.current) {
      clustere.current = new MarkerClusterer({map})
    }
  }, [map])

  // マーカーリストが変更されたときにクラスタを更新
  useEffect(() => {
    clustere.current?.clearMarkers();
    clustere.current?.addMarkers(Object.values(markers))
  }, [markers])

  // 新しいマーカーのリファレンスを作成する関数を作成
  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return
    if (!marker && !markers[key]) return

    setMarkers(prev => {
      if (marker) {
        return {...prev, [key]:marker}
      } else {
        const newMarkers = {...prev}
        delete newMarkers[key]
        return newMarkers
      }
    })
  }


  // ピン クリック時の処理
  const handleClick = (selectedPost:AllItemTypes) => {
    console.log(`クリックされました ${selectedPost.title}`)
    setCurrentPin(selectedPost)
    console.log("選択された currentPin:", selectedPost); // ←ここ追加してみて！
  }

  return (
    <>
      {allItems.map((poi)=> (
        poi.lat && poi.lon ? (
          <AdvancedMarker
            key={poi.id}
            position={{lat: poi.lat, lng: poi.lon}}
            ref={marker => setMarkerRef(marker, String(poi.id))}
            clickable={true}
            zIndex={currentPin?.id === poi.id ? 9999 : 1}
            onClick={() => handleClick(poi)}
            >
            {poi.image1 ? (
              <div style={{
                backgroundImage: `url(${poi.image1})`,
                backgroundSize: 'cover',
                borderRadius: '50%',
                border: currentPin?.id === poi.id ? '3px solid #FF3434' : '5px solid #fff',
                width: currentPin?.id === poi.id ? '90px' : '60px',
                height: currentPin?.id === poi.id ? '90px' : '60px',
                // opacity: currentPin?.id === poi.id ? '100%' : '90%',
                }}
              />
            ):(
              <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            )}
          </AdvancedMarker>
        ): null
      ))}
    </>
  )
}

export default PoiMarkers
