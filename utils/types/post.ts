export type AllItemTypes = {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  title: string,
  image1: string,
  description1: string,
  image2: string,
  description2: string,
  image3: string,
  description3: string,
  image4: string,
  description4: string,
  image5: string,
  description5: string,
  likeCount: number,
  lat: number,
  lon: number,
  location: string,
  googlePlace: string,
  published: boolean,
  category: string,
  authorId: number,
  author: {
    id: number,
    name: string,
    userIcon: string
  }
}
