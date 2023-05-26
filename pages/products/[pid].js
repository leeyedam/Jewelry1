import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/facilities-single/gallery';
import Content from '../../components/facilities-single/content';
import Description from '../../components/facilities-single/description';
import Reviews from '../../components/facilities-single/reviews';
import { server } from '../../utils/server'; 

export async function getServerSideProps({ query }) {

  const pid = query.pid;
  const res = await fetch(`${server}/api/products/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  }
}

const place = ({ product }) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb currentPage={product.name} />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <Description product={product} show={showBlock === 'description'} />
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default place
