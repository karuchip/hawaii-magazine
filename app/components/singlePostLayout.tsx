"use client"
import { AllItemTypes } from "@/utils/types/post"
import { Avatar, Zoom } from "@mui/material"
import dayjs from "dayjs"
import Link from "next/link"


const SinglePostLayout = ({singleItem}:{singleItem: AllItemTypes}) => {

  const createdAtFormatted = dayjs(new Date(singleItem.createdAt)).format("YYYY/MM/DD")

  //記事セクションについて配列に整形
  const imageDescriptions = [];
  for (let i=1; i<=5; i++) {
    const image = singleItem[`image${i}` as keyof AllItemTypes] as string;
    const rawDescription = singleItem[`description${i}` as keyof AllItemTypes] as string;
    const description = rawDescription ?? ""

    if(image || description) {
      imageDescriptions.push({image, description})
    }
  }


  return(
    <article style={{marginTop: "40px"}}>
      {/* 記事ヘッドパート */}
      <div className="headContent">
        <p className="en headCategory">{singleItem.category}</p>
        <div className="horizontalLineLight"><span></span></div>
        <div className="headInf">
          <Link href={`/readmypage/${singleItem.author.id}`}>
            <label className="headInfUser">
              {singleItem.author.userIcon && singleItem.author.name &&(
                <Avatar src={singleItem.author.userIcon} alt={singleItem.author.name} className="userIcon"/>
              )}
              <p className="en">by {singleItem.author.name}</p>
            </label>
          </Link>
          <time className="en headInfCreatedAt">{createdAtFormatted}</time>
        </div>
        <div className="horizontalLineLight"><span></span></div>
      </div>


      {/* 記事セクション */}
      <section className="sectionContent">
        <div className="sectionTitle">
          <div className="verticalLine"><span></span></div>
          <h1>{singleItem.title}</h1>
        </div>

        {imageDescriptions.map((item, index) => (
          <div className="sectionImage" key={index}>
            {item.image && (
              <div className="sectionImageContainer">
                <img alt="画像" src={item.image}/>
              </div>
            )}
            {item.description && (
              <p className="sectionImageDescription lineBreak">{item.description}</p>
            )}
          </div>
        ))}
      </section>
    </article>
  )
}

export default SinglePostLayout
