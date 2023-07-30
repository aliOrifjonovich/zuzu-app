import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cls from "./banner.module.scss";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import images
import BannerImage from "../../../Images/banner.png";
import BannerImage_2 from "../../../Images/banner-2.png";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={cls.SwiperWrapper}
      >
        <SwiperSlide className={cls.img_wrapper}>
          <img src={BannerImage} alt="img" className={cls.image} />
        </SwiperSlide>
        <SwiperSlide className={cls.img_wrapper}>
          <img src={BannerImage_2} alt="img" className={cls.image} />
        </SwiperSlide>
        <SwiperSlide className={cls.img_wrapper}>
          <img src={BannerImage} alt="img" className={cls.image} />
        </SwiperSlide>
        <SwiperSlide className={cls.img_wrapper}>
          <img src={BannerImage} alt="img" className={cls.image} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
