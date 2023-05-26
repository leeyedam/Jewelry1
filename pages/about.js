import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';

const About = () => (
  <Layout>
    <section className="featured">
      <div className="container">
      <div style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-large"/>
          <div className='featured-item-small-first'> 
            <h3>About Us</h3>
          <h4>We get design inspiration from nature. For example, it is reflected using colors and lines from the stone itself. Or inspired by trees and leaves.</h4>
          </div>
      </div>
    </section>
    <Footer />
  </Layout>
)
  
export default About;
  