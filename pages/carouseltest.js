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
  { src: "/images/image2.jpg", alt: "Image 2" },
  { src: "/images/image3.jpg", alt: "Image 3" },
  { src: "/images/image4.jpg", alt: "Image 4" },
];

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 },
      }}
      className="my-5"
    >
      {images.map(({ src, alt }) => (
        <SwiperSlide key={src}>
          <div className="w-full h-72">
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:m-5 order-first sm:order-last">
          <div className="w-full h-72 relative rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/Joe-square.jpg"
              alt="Joseph Anselm Head Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to my Next.js website!
          </h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            lorem sit amet erat vestibulum tristique.
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
