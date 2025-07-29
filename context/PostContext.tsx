"use client"

import {createContext, useContext, useState, ReactNode} from "react";

// 投稿データ型
type PostDataType = {
  title: string;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  image5: string | null;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  category: string;
  location: string | null;
  googlePlace: string | null;
  lat: number | null;
  lon: number | null;
}

// 初期値
const initialPostData :PostDataType = {
  category: '',
  title: '',
  image1: null,
  image2: null,
  image3: null,
  image4: null,
  image5: null,
  description1: "",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  location: null,
  googlePlace: null,
  lat: 0,
  lon: 0
}

// contextの型
type PostContextType = {
  postData: PostDataType;
  setPostData: (data: PostDataType) => void;
  resetPostData: () => void;
}

// contextの作成
const PostContext = createContext<PostContextType | undefined> (undefined);

// Providerコンポーネント
export const PostProvider = ({children} : {children: ReactNode}) => {
  const [postData, setPostData] = useState<PostDataType>(initialPostData);
  const resetPostData = () => setPostData(initialPostData);

  return (
    <PostContext.Provider value={{postData, setPostData, resetPostData}}>
      {children}
    </PostContext.Provider>
  );
};

// コンテクストを使うためのカスタムフック
export const usePostContext = ():PostContextType => {
  const context = useContext(PostContext);
  if(!context) {
    throw new Error('usePostContext must be used within a PostProvider')
  }
  return context;
}

