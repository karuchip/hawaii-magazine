
import { AllItemTypes } from "@/utils/types/post"
import Form from "./form"

const fetchPosts = async() => {
  try {
    const postRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/readall`)
    const postData = await postRes.json()
    return postData.allItems
  }catch(error) {
    console.error(error)
    return null
  }
}

const SearchFromGoogleMap = async() => {
  const allItems:AllItemTypes[] = await fetchPosts()

  return (
    <>
      <Form allItems={allItems}/>
    </>
  )
}

export default SearchFromGoogleMap

