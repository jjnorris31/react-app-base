import {ReactElement} from "react";

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[]
}

export interface Product {
  id: string,
  title: string,
  image?: string
}


export interface ProductContextProps {
  counter: number,
  increaseBy: (value: number) => void,
  product: Product
}
