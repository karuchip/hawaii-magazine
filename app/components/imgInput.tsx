import { useState } from "react"

const ImgInput = (props:any ) => {
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleClick = async() => {
    try {
      const data = new FormData()
      if (!imageFile) return

      data.append("file", imageFile)
      data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string)
      data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string)
      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string}/image/upload`, {method: "POST", body:data})
      const jsonData = await response.json()

      await props.setImage(jsonData.url)
      alert("画像アップロード成功")
    }catch(err) {
      alert("画像アップロード失敗")
    }
  }
  return (
    <div className="img-input">
      <input type="file" onChange={(e)=> {
        const file = e.target.files?.[0]
        if (file) {
          setImageFile(file)
        }
      }} accept="image/png, image/jpg"/>
      <button type="button" onClick={handleClick} disabled={!imageFile}>画像 Upload</button>
    </div>
  )
}

export default ImgInput
