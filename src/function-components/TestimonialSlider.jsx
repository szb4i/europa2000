import { useRef, useState } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TestimonialSlider.css";

const TestimonialSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  return (
    <div className="swiper-container">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        // autoplay={true}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {list.map((item, i) => (
          <SwiperSlide key={"feature-" + i}>
            {/* <div className={'carousel-image-container mx-4 my-16 rounded-xl text-center shadow ' + (i % 2 === 0 ? 'rotate-2' : '-rotate-2')}>
              <img className="carousel-image rounded-xl" src="/D85-7380.jpg" alt="" />
            </div> */}
            <div className={'image-container mx-4 my-16 rounded-xl text-center shadow ' + (i % 2 === 0 ? 'rotate-2' : '-rotate-2')}>
              <div className="overlay-text-container overlay-text-container-padding-top-on-hover rounded-xl">
                <div className="overlay-text-title">Title</div>
                <div className="overlay-text-description">A digitális tanulás nemcsak eszköz, hanem az élményalapú oktatás alapköve. Egyedülálló technológiai háttérrel készítjük fel diákjainkat a jövő kihívásaira.</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center testimonial-slider-pagination">
        <div
          width="100%"
          className="swiper-pagination reviews-carousel-pagination !bottom-0"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
