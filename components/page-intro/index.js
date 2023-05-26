import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>JEWELRY</h2>
                <h3>Handcrafting the world’s best diamonds starts with knowing where they come from. We proudly trace 100% of our rough diamonds to known mines and sources.</h3>
                {/* <a href="#" className="btn-shop"><i className="icon-right"></i>서울지점 바로가기</a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>JEWELRY</h2>
                <h3>Handcrafting the world’s best diamonds starts with knowing where they come from. We proudly trace 100% of our rough diamonds to known mines and sources.</h3>
                {/* <a href="#" className="btn-shop"><i className="icon-right"></i>서울지점 바로가기</a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-3.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>JEWELRY</h2>
                <h3>Handcrafting the world’s best diamonds starts with knowing where they come from. We proudly trace 100% of our rough diamonds to known mines and sources.</h3>
                {/* <a href="#" className="btn-shop"><i className="icon-right"></i>서울지점 바로가기</a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
};

export default PageIntro