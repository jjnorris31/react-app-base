import {useContext} from "react";
import styles from "../assets/styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import {ProductContext} from "./ProductCard";


export const ProductImage = () => {
	const {product} = useContext(ProductContext);

	return (
		<img className={styles.productImg} src={product.image ? product.image : noImage} alt="Coffee mug"/>
	)
}
