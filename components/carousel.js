import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import LazyLoad from "react-lazy-load";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const images = [
  { src: "/images/Joe-pic2.jpg", alt: "Joseph Anselm Head Image" },
  { src: "/images/jojo-pic1.jpg", alt: "Joseph Anselm" },
  { src: "/images/jojo-pic2.jpg", alt: "Joseph Anselm" },
  
];

export default function Carousel() {
  return (
    <div className="w-full h-75 md:h-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1, spaceBetween: 30 },
          1024: { slidesPerView: 1, spaceBetween: 40 },
        }}
        className="my-5"
      >
        {images.map(({ src, alt }) => (
          <SwiperSlide key={src}>
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-48 h-75 md:w-auto md:h-75">
                <Image
                  src={src}
                  alt={alt}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="rounded-full drop-shadow-md hover:drop-shadow-2xl"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
