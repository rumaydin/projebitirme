import React from "react";
import Slider from "./slider";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Üst görsel */}
      <div className="relative h-[70vh] w-full">
        {/* Arka plan görseli */}
        <img
          src="/anasayfa.jpeg"
          alt="Anasayfa Görseli"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Karartma Katmanı */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Yazı */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Türkiye’nin İlk ve Tek <br /> Kültür Sanat Platformu
          </h1>
        </div>
      </div>

      {/* Slider */}
      <div className="flex-grow">
        <Slider />
      </div>
    </div>
  );
}