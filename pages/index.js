import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <div
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          />
          <div className="featured-item-small-first">
            <h3>About Us</h3>
            <h4>
              We get design inspiration from nature. For example, it is
              reflected using colors and lines from the stone itself. Or
              inspired by trees and leaves.
            </h4>
          </div>
        </div>
      </section>

      <ProductsFeatured />
      {/* <Subscribe /> */}
      <Footer />
    </Layout>
  );
};

export default IndexPage;
