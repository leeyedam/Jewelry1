import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import RoomContent from '../components/room-content';

const reservation = () => (
  <Layout>
    <section className="">
      <div className="container">
        <RoomContent />
      </div>
    </section>
    <Footer />
  </Layout>
)   
  
export default reservation
  