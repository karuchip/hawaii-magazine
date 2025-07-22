
// 画像リサイズ処理
const ResizeImage = (file: File, maxWidth = 800, maxHeight=800):Promise<Blob> =>{
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

export default ResizeImage
