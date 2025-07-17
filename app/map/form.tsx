"use client"

import { useState } from 'react';
import { AllItemTypes } from '@/utils/types/post';
import GoogleMapSearchPost from '../components/map/googleMapSearchPost';


type Props = {
  allItems: AllItemTypes[];
}

const Form = ({allItems}:Props) => {

  const [currentPin, setCurrentPin] = useState<AllItemTypes | null>(null)

  return (
      <GoogleMapSearchPost
        allItems={allItems}
        defaultZoom={12}
        defaultCenter={{ lat: 21.2806084, lng: -157.8141057 } }
        currentPin = {currentPin}
        setCurrentPin = {setCurrentPin}
      />
  )
}

export default Form
