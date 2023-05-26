import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <div style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large"/>
          <div className='featured-item-small-first'> 
            <h3>About Us</h3>
          <h4>We get design inspiration from nature. For example, it is reflected using colors and lines from the stone itself. Or inspired by trees and leaves.</h4>
          </div>
          
          {/* <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>수영장 OPEN</h3>
              <a href="#" className="btn btn--rounded">지금 예약하기</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>골프클럽</h3>
              <a href="#" className="btn btn--rounded">지금 예약하기</a>
            </div>
          </article> */}
        </div>
      </section>

      <ProductsFeatured />
      {/* <Subscribe /> */}
      <Footer />
    </Layout>
  )
}


export default IndexPage