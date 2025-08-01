import { AllItemTypes } from "./types/post"

export const GetSingleItem = async (id: string): Promise<AllItemTypes> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/readsingle/${id}`)
  const jsonData = await response.json()
  return jsonData.singleItem
}
