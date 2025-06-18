import { AllItemTypes } from "@/utils/types/post";
import Form from "./form"
import Loading from "@/app/components/loading";

type Props = {
  params: {
    id: string;
  }
}

const getSingleItem = async (id: string) => {

  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/readsingle/${id}`)
    const jsonData = await response.json()
    const singleItem:AllItemTypes = jsonData.singleItem

    return singleItem

  }catch(error) {
    console.log("フェッチ失敗")
    return null
  }
}

//ページを開いたときの処理
export default async function editSingleItem ({params}:Props){
  const id = params.id
  const singleItem = await getSingleItem(id);

  if(singleItem) {
    return (
      <>
        {singleItem ? (
          <Form singleItem={singleItem}/>
        ):(
          <Loading />
        )}
      </>
    )
  }else{
    return <Loading />
  }
}

