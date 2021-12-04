import styles from '../assets/styles/styles.module.css'
import {useProduct} from "../hooks/useProduct";
import noImage from '../assets/no-image.jpg'

interface Props {
  product: Product
}

interface Product {
  id: string,
  title: string,
  image?: string
}

interface ProductControlsProps {
  increaseBy: (value: number) => void,
  counter: number,
}

export const ProductImage = ({image = ''}) => {
  return (
    <img className={styles.productImg} src={image ?? noImage} alt="Coffee mug"/>
  )
}

export const ProductTitle = ({title}: {title: string}) => {
  return (
    <span className={styles.productDescription}>
        {title}
      </span>
  )
}

export const ProductControls = ({increaseBy, counter}: ProductControlsProps) => {

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus}
              onClick={() => increaseBy(-1)}>-</button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd}
              onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}

export const ProductCard = ({product}: Props) => {
  const {counter, increaseBy} = useProduct();
  return (
    <div className={styles.productCard}>
      <ProductImage image={product.image}/>
      <ProductTitle title={product.title}/>
      <ProductControls counter={counter} increaseBy={increaseBy}/>

    </div>
  )
}
