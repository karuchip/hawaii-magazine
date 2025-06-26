import {useState} from "react"
import Loading from "./loading"
import resizeImage from '@/app/components/resizeImage'

type IconInputProps = {
  icon: string | null;
  setIcon: (value:string) => void;
}

const IconInput = ({icon, setIcon}: IconInputProps) => {
  const [uploading, setUploading] = useState(false)

  const handleUpload = async(file: File) => {
    setUploading(true)

    try {
      //リサイズ関数の呼び出し
      const resizedBlob = await resizeImage(file)
      const data = new FormData();
      if (!file) return

      data.append("file", resizedBlob, file.name)
      data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string)
      data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string)
      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string}/image/upload`,
        {
          method: "POST",
          body:data
        }
      )

      if(!response.ok) {
        const errorData = await response.json()
        console.error("Cloudinaryエラー内容:", errorData)
        throw new Error("Cloudinaryへのアップロードに失敗しました")
      }

      const jsonData = await response.json()
      setIcon(jsonData.secure_url)
      alert("画像アップロード成功"

      )
    }catch(err) {
      alert("画像アップロード失敗")
    }finally {
      setUploading(false)
    }
  }

  if(uploading) {
    return <Loading/>
  }

  return (
    <div>
      <label>
        <input
          type="file"
          onChange={(e)=> {
            const file = e.target.files?.[0];
            if (file) {
              handleUpload(file)
            }
          }}
          accept="image/png, image/jpeg"
          className="hiddenInput"
        />
        <div className='profileIconBorder'>
          <div className='profileIconContainer'>
            {icon && (
                  <img src={icon} alt="アイコン" style={{width:"300px", height:"300px"}}/>
            )}
          </div>
        </div>
        <div className="editIcon">
          <p>写真を編集</p>
        </div>

      </label>
    </div>
  )
}

export default IconInput
