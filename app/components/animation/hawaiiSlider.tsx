import { useEffect, useState } from "react";

const images = [
  "/about/fv/hawaii1.JPG",
  "/about/fv/hawaii2.JPG",
  "/about/fv/hawaii3.JPG",
]

export default function HawaiiSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000);
    return () => clearInterval(interval);
  }, [])


  return (
    <div className="hawaiiSlideContainer">
      {images.map((img, i)=> (
        <img
          key={i}
          src={img}
          alt={'hawaii${i}'}
          style={{
            opacity: i === index ? "100" : "0",

          }}
          className="sliderImage"
        />
      ))}
    </div>
  )
}
