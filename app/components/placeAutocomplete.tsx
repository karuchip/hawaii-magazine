"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script" // ← 追加！

type Props = {
  onSelectPlace: (lat: number, lng: number, placeName: string) => void,
  defaultPlace: string | null
}

const PlaceAutocomplete = ({ onSelectPlace, defaultPlace }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [place, setPlace] = useState<string | null>("")

  useEffect(() => {
    if (!window.google) return
    if (inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
        types: ["geocode"],
      })

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace()
        if (place.geometry) {
          if (place.geometry.location) {
            const lat = place.geometry.location.lat()
            const lng = place.geometry.location.lng()
            const name = place.formatted_address || place.name || ""
            onSelectPlace(lat, lng, name)
            setPlace(name)
          }
        } else if (inputRef.current) {
          const name = inputRef.current.value
          onSelectPlace(NaN, NaN, name)
          setPlace(name)

        }
      })
    }
  }, [])

  useEffect(() => {
    setPlace(defaultPlace)
  }, [defaultPlace])

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="場所を検索する"
          style={{
            width: "97%",
            height: "50px",
            marginTop:"10px",
            border: "none",
            borderBottom: "1px solid #A1A1A1",
            fontSize: "18px",
            outline: "none"
            }}
          value={place ?? ""}
          onChange={(e) => setPlace(e.target.value)}

        />
      </div>
    </>
  )
}

export default PlaceAutocomplete
