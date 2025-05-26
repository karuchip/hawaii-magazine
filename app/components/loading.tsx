import Image from "next/image"
import { Typography } from "@mui/material"

const Loading = () => {
  return (
    <div className="LoadingContainer">
      <div className="LadingContent">

        <Typography variant="h3"
          sx={{
            fontFamily: '"Kaushan Script", cursive',
            fontSize:"24px",
            color:"#5a8c68",
            display:"flex",
            justifyContent:"center",
            mt:"30px"
          }}>
          Loading...
        </Typography>

        <Image
          src="/loading/loadingFlower.png"
          alt="画像"
          width={80}
          height={80}
          style={{display:"flex", justifyContent:"center"}}
        />

      </div>
    </div>
  )
}
export default Loading
