import {useContext} from "react";
import styles from "../assets/styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductTitle = () => {

	const {product} = useContext(ProductContext);

	return (
		<span className={styles.productDescription}>
        {product.title}
      </span>
	)
}
