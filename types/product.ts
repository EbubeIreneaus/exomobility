export type ProductType  =
{
    id: number
    name: string
    img: string
    category: {name: string, slug: string}
    price: number,
    discount: number,
    images: {image: string}[],
    video: string,
    slug: string,
    description: string,
    feature: boolean
    specifications: {name: string, value: string}[]
}