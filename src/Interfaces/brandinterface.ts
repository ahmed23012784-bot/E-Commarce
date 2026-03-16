export interface BrandResponse {
  results: number
  data: BrandItem[]
}

export interface BrandItem {
  _id: string
  name: string
  slug: string
  image: string
}