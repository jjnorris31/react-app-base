import {ProductCard} from "../components/ProductCard";
import {ProductImage} from "../components/ProductImage"
import {ProductTitle} from "../components/ProductTitle";
import {ProductControls} from "../components/ProductControls";

const product = {
  id: '1',
  title: 'Coffee mug',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr>
      </hr>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle/>
          <ProductControls/>
        </ProductCard>
      </div>
    </div>
  )
}
