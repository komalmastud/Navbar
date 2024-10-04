import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your images
import Slide1 from "../assets/image3.jpg";
import Slide2 from "../assets/image4.jpg";
import Slide3 from "../assets/image5.jpg";
import Slide4 from "../assets/image6.jpg";
import Slide5 from "../assets/image7.jpg";
import Slide6 from "../assets/image10.jpg";
import Slide7 from "../assets/image9.jpg";
import Slide8 from "../assets/image2.jpg";

const Features = () => {
  return (
    <Swiper
      className="swiper-container"
      spaceBetween={10}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <div className="Photos">
          <img src={Slide1} alt="Slide 1" />
          <div className="over">
            <h1>Book 1, Get 1 Night Free</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Photos">
          <img src={Slide2} alt="Slide 2" />
          <div className="over">
            <h1>Ready To Welcome You</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Photos">
          <img src={Slide3} alt="Slide 3" />
          <div className="over">
            <h1>Best Getaways</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Photos">
          <img src={Slide4} alt="Slide 4" />
          <div className="over">
            <h1>Explore New Places</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Photos">
          <img src={Slide5} alt="Slide 5" />
          <div className="over">
            <h1>Your Adventure Awaits</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Photos">
          <img src={Slide6} alt="Slide 6" />
          <div className="over">
            <h1>Book Your Stay Today!</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Photos">
          <img src={Slide7} alt="Slide 7" />
          <div className="over">
            <h1>Travel with Comfort</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Photos">
          <img src={Slide8} alt="Slide 8" />
          <div className="over">
            <h1>Ready To Welcome You</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Features;
