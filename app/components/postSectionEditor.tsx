import ImgInput from "../components/imgInput"
import { Dispatch, SetStateAction } from 'react'
import { useEffect } from "react"



type Section = {
  image: string | null;
  description: string;
}

type Props = {
  sections: Section[];
  setSections: Dispatch<SetStateAction<Section[]>>
}


export default function PostSectionEditor({sections, setSections}:Props) {



  const handleAddSection = () => {
    if(sections.length <= 5) {
      setSections([...sections, {image: null, description: ""}])
    }
  }

  const handleImageChange = (index:number, value:string | null) => {
    const newSections = [...sections]
    newSections[index].image = value
    setSections(newSections)
  }

  const handleDescriptionChange = (index:number, value:string) => {
    const newSections = [...sections]
    newSections[index].description = value
    setSections(newSections)
  }


  const handleClearPic = (index:number)=> {
    setSections((prevSections) =>
      prevSections.map((section, i) =>
        i === index ? { ...section, image: null} : section
      )
    )
  }


  return(
    <div>
      {sections.map((section, index) => (
        <div key={index} className='createSection' >
          <p className='sectionNo'>セクション{index+1}</p>
          <ImgInput
            setImage={(value) => handleImageChange(index, value)}
            image={section.image}
          />
          <div className="imageURLContent">
            <input
              className="selectImageBox"
              value={sections[index].image ?? ""}
              onChange={(e) => handleImageChange(index, e.target.files?.[0]?.name ?? null)}
              type="text"
              id="createImage"
              disabled
            />
            <button onClick={()=>handleClearPic(index)}>画像削除</button>
          </div>

          <textarea
            value={section.description ?? ""}
            onChange={(e) => handleDescriptionChange(index, e.target.value)}
            placeholder='| ここに記事の説明を入力してください。(入力例) 真ピンクのソースが気分を盛り上げてくれるグアバパンケーキ。すっきりとした甘酸っぱさと、フルーティかつスパイシーな香りが、口に入れた瞬間美味しさが増幅で最高。ハワイに来たら並んでも食べたい一品 -グアバパンケーキ: 24ドル'
          />
        </div>
      ))}

      {sections.length < 5 && (
        <div className='addSectionBtn'>
          <button onClick={handleAddSection}>
            + セクションを追加する
          </button>

        </div>
      )}
    </div>
  )
}
