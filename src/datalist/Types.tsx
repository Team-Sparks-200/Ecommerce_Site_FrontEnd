export interface IProduct
{
  id: number
  name: string,
  new_price:string,
  old_price:string
  image: string
}

export interface ICartItem  {
  id: number
  name: string,
  new_price:string,
  old_price:string,
  image: string,
  quantity: number
}

export interface ICart {
  cart : ICartItem[]
}
