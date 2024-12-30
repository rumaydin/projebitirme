import React from "react";
import Slider from "./slider";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Üst görsel */}
      <div className="relative h-[80vh] w-full">
        <img
          src="/anasayfa.jpeg"
          alt="Anasayfa Görseli"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider */}
      <div className="w-full h-[20vh]">
        <Slider />
      </div>
    </div>
  );
}