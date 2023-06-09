import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../data/slider.json";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
// Import required modules
import { Pagination, Navigation } from "swiper";
import ResidenceSlide from "./ResidenceSlide";

const SwiperSlider = () => {
  // Define breakpoints for different screen widths
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <div className="res_slider_main_container">
      <div className="res_slider_btn_container flex">
        <button className="swiper-prev-button"><KeyboardArrowLeftIcon/></button>
        <button className="swiper-next-button"><KeyboardArrowRightIcon/></button>
      </div>

      <Swiper
        navigation={{
          nextEl: '.swiper-next-button',
          prevEl: '.swiper-prev-button',
        }}
        grabCursor={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <ResidenceSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
