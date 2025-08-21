import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import movies from '../data/data';


const Slider = () => {
  return (
    <div className="w-full bg-black text-white py-6">
      <h2 className="text-2xl font-bold mb-4 px-6">Trending Now</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={15}
        slidesPerView={5} // show 5 at a time (like Netflix)
        loop={true}
        className="px-6"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <div className="relative group cursor-pointer">
              {/* Movie Poster */}
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
              />

              {/* Number Badge like Netflix */}
              <span className="absolute left-4 bottom-2 text-6xl font-extrabold text-shadow-blue-400 text-blue-500 drop-shadow-lg opacity-70">
                {index + 1}
              </span>

              {/* Overlay on hover */}
              <div className="absolute inset-0 opacity-0 bg-black/40 group-hover:opacity-100 transition-opacity flex items-start justify-center p-2 rounded-xl">
                <p className="text-sm font-semibold">{movie.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
