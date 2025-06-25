import { useState } from "react"
import Loading from "./loading";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

type ImageInputProps = {
  image: string | null;
  setImage: (value:string | null) => void;
}

const ImgInput = ({image, setImage}: ImageInputProps) => {

  const [uploading, setUploading] = useState(false)

  // 画像リサイズ処理
  const resizeImage = (file: File, maxWidth = 800, maxHeight=800):Promise<Blob> =>{
    return new Promise((resolve, reject) => {

      // ①
      const reader = new FileReader();

      // ③
      reader.onload = (event) => {
        const img = new Image()

        // ⑤
        img.onload = () => {
          // アスペクトを保ちながらサイズ調整
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            if (width > height) {
              height = (maxWidth / width) * height;
              width = maxWidth
            } else {
              width = (maxHeight / height) * width;
              height = maxHeight
            }
          }

          // <canvas>要素を作る
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          // <canvas>に画像を描写するためのツール取得
          const ctx = canvas.getContext("2d");
          if(!ctx) {
            reject(new Error("2D context not available"));
            return;
          }

          // <canvas>に画像を描く
          ctx.drawImage(img, 0, 0, width, height);

          // Blob(アップロード用の画像ファイルに変換)
          canvas.toBlob(
            (blob) => {
              if (blob){
                resolve(blob);
              } else {
                reject(new Error("画像の変換に失敗しました"));
              }
            },
            "image/jpeg",
            // 画質
            0.8
          );
        };

        // ④
        if (event.target?.result) {
          img.src = event.target.result as string;
        }
      };

      // ② base64として読み込み
      reader.readAsDataURL(file)
    })
  }


  const handleUpload = async(file: File) => {
    setUploading(true)
    try {
      const resizedBlob = await resizeImage(file);

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
