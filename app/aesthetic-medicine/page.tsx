"use client"

import Reviews from "@/sections/Reviews/Reviews";
import Treatments from "@/sections/Treatments/Treatments";

export default function AestheticMedicine() {
  return (
    <div
      className="flex flex-col w-full items-center justify-between min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] py-10 px-14 bg-tiber"
    >
      <h2 className="text-3xl text-white font-bold mb-4 text-center">
        Medicina Estetica
      </h2>
      <p className="text-lg text-white mb-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis, ante a mollis pulvinar, sem sem scelerisque arcu, sed dignissim eros erat vitae neque. Aenean est nisl, lacinia ut urna ac, aliquam dictum elit. Aliquam vehicula dolor turpis, vel semper neque sagittis at. Donec cursus euismod turpis, non interdum ligula ultricies vel. Fusce faucibus, eros vel vulputate ullamcorper, nisi ipsum ornare felis, sed pulvinar ipsum libero sed mi. Praesent mattis scelerisque tortor, hendrerit pretium orci gravida non. Donec congue mauris sem, quis consectetur nisi molestie quis. Phasellus hendrerit lectus velit, vel imperdiet nisl elementum a. Nunc ullamcorper accumsan commodo. Proin dignissim, felis ut fringilla faucibus, felis orci posuere metus, eu scelerisque metus mauris eu tortor.
      </p>
      <Treatments />
      <Reviews />
    </div>
  );
}
