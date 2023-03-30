import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination]);

const images = [
  { src: "/images/Joe-square.jpg", alt: "Joseph Anselm Head Image" },
  { src: "/images/Joe-square.jpg", alt: "Joseph Anselm" },
  { src: "/images/Joe-square.jpg", alt: "Joseph Anselm" },
  { src: "/images/Joe-square.jpg", alt: "Joseph Anselm" },
];

export default function Carousel() {
  return (
    <div className="w-full h-72 md:h-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
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
              <div className="w-48 h-auto md:w-auto md:h-72">
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
