import { useState } from "react"
import Loading from "../common/loading";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ResizeImage from '@/utils/resizeImage'

type ImageInputProps = {
  image: string | null;
  setImage: (value:string | null) => void;
}

const ImgInput = ({image, setImage}: ImageInputProps) => {

  const [uploading, setUploading] = useState(false)

  const handleUpload = async(file: File) => {
    setUploading(true)
    try {
      const resizedBlob = await ResizeImage(file);

      const data = new FormData();
      if (!file) return

      data.append("file", resizedBlob, file.name)
      data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string)
      data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string)
      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string}/image/upload`,
        {
          method: "POST",
          body:data
        }
      )
      const jsonData = await response.json()
      setImage(jsonData.secure_url)
      alert("画像アップロード成功")
    }catch(err) {
      alert("画像アップロード失敗")
    }finally {
      setUploading(false)
    }
  }

  if(uploading) {
    return <Loading />
  }

  return (
    <div className="imgInput">
      <label>
        <input
          type="file"
          onChange={(e)=> {
            const file = e.target.files?.[0];
            if (file) {
              handleUpload(file)
            }
          }}
          accept="image/png, image/jpg"
          className="hiddenInput"
        />
        <div className="selectImageBtn">
          <div className="previewImageContainer">
            <p><AddPhotoAlternateIcon sx={{width:"200px", height: "200px", color:"#fff"}}/></p>
            {image && (
              <img src={image} alt="プレビュー画像"/>
            )}
          </div>
        </div>
      </label>
    </div>
  )
}

export default ImgInput
