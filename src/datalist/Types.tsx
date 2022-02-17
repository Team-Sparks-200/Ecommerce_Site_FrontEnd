export interface IProduct
{
  id: number
  name: string,
  new_price:string,
  old_price:string
  image: string
}

export type Cart = {
  cart : IProduct[]
}