"use client"
import { useEffect, useState } from "react"
import HawaiiSlider from "@/app/components/hawaiiSlider"

const about = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(()=> {
      setShowContent(true)
    }, 200);

    return() => clearTimeout(timer);
  }, [])

  return(
    <>
      <div className="fvContainer">
        <HawaiiSlider/>
        <div className={`fvContent ${showContent ? "visible" : ""}`}>
          <h1>「あなたのハワイ、<br/>　みんなでシェアしよう」</h1>
          <p>　Share Your Aloha memories</p>
          <div className="aboutBtnFV">
            <button>写真を見てみる</button>
            <button>ログインする</button>
          </div>
        </div>
      </div>
      <div className="aboutContainer">
        <div className="aboutContent">

          <section className="aboutConcept">
            <h2>Concept</h2>
            <h3>「誰かの"好き"が、誰かの旅のヒントになる。」</h3>
            <p>誰かの「好き」が他の誰かの「旅のヒント」になるように、写真や思い出を自由にシェアできる空間を目指しています。UIやデザイン、使いやすさにもこだわって、ハワイの心地よさをそのまま感じられるアプリに仕上げました。</p>
          </section>

          <section className="aboutFeature">
            <h2>Features</h2>
            <h3>「こだわりの機能で、あなたにしか体現できない世界を」</h3>
            <div className="featureItemContainer sliderContainer">
              <div className="featureItemContent card">
                <h4>ハワイの写真を投稿・シェア</h4>
                <p>雑誌風のレイアウトで、誰でもおしゃれな記事が投稿できちゃう。ワイキキの思い出も、隠れスポットも。あなたの思い出をシェアしよう</p>
                <div className="featurePicContainer">
                  <div className="featurePicContent1">
                    <img src="/about/features/feature1.png"/>
                  </div>
                </div>
              </div>
              <div className="featureItemContent card">
                <h4>思い出にコメントやmahalo!!</h4>
                <p>ログイン後は、見るだけじゃなく、感じたことを共有できる空間です</p>
                <div className="featurePicContainer">
                  <div className="featurePicContent2">
                    <img src="/about/features/feature2.png"/>
                  </div>
                </div>
              </div>
              <div className="featureItemContent card">
                <h4>地図で見つけるハワイ</h4>
                <p>投稿された写真の場所を地図で表示、次の旅の参考に！</p>
                <div className="featurePicContainer">
                  <div className="featurePicContent3">
                    <img src="/about/features/feature3.png"/>
                  </div>
                </div>
              </div>
              <div className="featureItemContent card">
                <h4>マイページで思い出を振り返ろう</h4>
                <p>プロフィールや投稿を1ページに！！他のユーザーのページもチェックしよう</p>
                <div className="featurePicContainer">
                  <div className="featurePicContent4">
                    <img src="/about/features/feature4.png"/>
                  </div>
                </div>
              </div>
              <div className="featureItemContent card">
                <h4>こだわりのテーマフィルターや、並び替え・検索機能</h4>
                <p style={{height: "100px", width:"300px"}}>「自然」、「アクティビティ」などのフィルターや検索機能、並び替えで、トレンドや最新情報もばっちりゲット</p>
              </div>
            </div>
            <div className="scroll">
              <img src="/about/arrowToLeft.png"/>
              <p>Scroll</p>
              <img src="/about/arrowToRight.png"/>
            </div>

          </section>

          <section className="aboutMessage">
            <h2>Let's get started!!!</h2>
            <h3>さっそくハワイアプリを試してみよう!</h3>
            <div className="aboutBtn">
              <button>写真を見てみる</button>
              <button>ログインする</button>
            </div>
          </section>


        </div>
      </div>
    </>
  )
}

export default about
