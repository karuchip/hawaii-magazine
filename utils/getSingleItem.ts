export const GetSingleItem = async (id: string): Promise<{
  title: string
  image: string
  description: string
  place: string
  category: string
  authorId: number
}> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/readsingle/${id}`)
  const jsonData = await response.json()
  return jsonData.singleItem
}
