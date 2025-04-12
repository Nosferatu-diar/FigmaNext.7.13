"use client";

import Image from "next/image";
import { listenNowCards, madeForYou } from "@/utils";
import Sidebar from "@/components/sidebar";
import { CiCirclePlus } from "react-icons/ci";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      {/* Tabs */}
      <section className="border-b border-gray-300">
        <div className="flex items-center gap-5 pl-5 py-2 *:cursor-pointer">
          <button className="border-b-2 border-black font-semibold">
            Music
          </button>
          <Link href={"/home"} className="text-gray-500 hover:text-black">
            HOME
          </Link>
          <button className="text-gray-500 hover:text-black">Edit</button>
          <button className="text-gray-500 hover:text-black">View</button>
          <button className="text-gray-500 hover:text-black">Account</button>
        </div>
      </section>

      <section className="grid grid-cols-[1fr_4fr]">
        {/* siedbar */}
        <aside className="border-r border-gray-300">
          <Sidebar />
        </aside>

        {/* main */}
        <main className="pl-5">
          <div className="flex items-center justify-between mr-5 mt-2">
            <div className="flex items-center gap-7 *:rounded-lg *:px-4 bg-gray-200 rounded-lg px-5 py-2">
              <button className="hover:bg-white cursor-pointer">Music</button>
              <button className="hover:bg-white cursor-pointer">
                Podcasts
              </button>
              <button className="hover:bg-white cursor-pointer">Live</button>
            </div>
            <div className="flex items-center gap-2 bg-black py-2 px-3 rounded-lg  text-white cursor-pointer">
              <CiCirclePlus className="text-2xl" />
              Add Music
            </div>
          </div>
          <h2 className="text-2xl font-bold my-3">Listen Now</h2>
          <p className="text-sm text-gray-500 mb-5 curp">
            Top picks for you. Updated daily.
          </p>
          {/* Listen Now */}
          <div className="w-[1200px]">
            <div className="overflow-x-auto flex items-center gap-4">
              {listenNowCards.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[160px] flex-shrink-0 rounded-md overflow-hidden  shadow hover:shadow-lg transition"
                >
                  <div className="w-64 h-60 relative">
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
          {/* Made For You */}
          <div>
            <h2 className="text-xl font-bold mb-1">Made for You</h2>
            <p className="text-sm text-gray-500 mb-4">
              Your Personal playlists. Updated daily.
            </p>
            <div className="w-[1200px]">
              <div className="flex gap-4 overflow-x-auto">
                {madeForYou.map((item, i) => (
                  <div
                    key={i}
                    className="min-w-[160px] flex-shrink-0 rounded-md overflow-hidden shadow hover:shadow-lg transition"
                  >
                    {/* Rasm joyi */}
                    <div className="w-full h-36 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
