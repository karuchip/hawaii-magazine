"use client"

import { useEffect, useState } from 'react';
import { AllItemTypes } from '@/utils/types/post';
import GoogleMapSearchPost from '../components/map/googleMapSearchPost';
import PostCard from '../components/format/postCard';
import FetchLikePostId from '@/utils/fetchLikePostId';
import { useAuthContext } from '@/context/AuthContext';
import Link from 'next/link';


type Props = {
  allItems: AllItemTypes[];
}

const Form = ({allItems}:Props) => {

  const [currentPin, setCurrentPin] = useState<AllItemTypes | null>(null)
  const [likePostIds, setLikePostIds] = useState<string[]>([])
  const {loginUserId} = useAuthContext()

  //いいね済み投稿のid取得
  useEffect(() => {
    if (!loginUserId) return
    FetchLikePostId({loginUserId, setLikePostIds})
  }, [loginUserId])

  return (
      <>
        <div className='mapContainer'>

          <div className='co-back' style={{marginLeft:"10px"}}>
            <Link href="/">↩︎ 戻る</Link>
          </div>

          <div className='MapContent'>
            <GoogleMapSearchPost
              allItems={allItems}
              defaultZoom={12}
              defaultCenter={{ lat: 21.2806084, lng: -157.8141057 } }
              currentPin = {currentPin}
              setCurrentPin = {setCurrentPin}
            />

            <div className='MapContentSelectedContainer'>

              {currentPin && (
                <div className='MapContentSelectedContent'>
                  <div className='MapContentSelectedPost'>
                    <PostCard allItems={[currentPin]} likePostIds={likePostIds}/>
                  </div>
                  <div className='MapContentSelectedPostDetail'>
                    <h3 className='en'>Summary</h3>
                    <p>{currentPin.description1}</p>
                  </div>
                </div>
              )}

              {!currentPin && (
                <div className='MapContentNotSelected'>
                  <p>地図から画像を選択しよう</p>
                </div>
              )}

            </div>

          </div>
        </div>
      </>
  )
}

export default Form
