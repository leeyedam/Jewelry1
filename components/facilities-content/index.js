import { useState } from 'react';
import List from './list';

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>New Products</h2>
      </div>
      <List />
    </section>
  );
};
  
export default ProductsContent
  