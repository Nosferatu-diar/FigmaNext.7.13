import React from "react";
import { listenNowCards } from "@/utils";
import Image from "next/image";
const HomePage = () => {
  return (
    <section className="bg-gray-500 py-5">
      <div className="w-[80%] m-auto">
        <div className="grid grid-cols-5 gap-5">
          {listenNowCards.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-md bg-white overflow-hidden  shadow hover:shadow-lg shadow-white transition cursor-pointer"
            >
              <div className="w-64 h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="font-semibold">{item.title}</p>
                <p className="text-xs text-gray-500">{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
