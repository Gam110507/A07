'use client'

import Image from "next/image";
import style from "./banner.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const covers = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];
  const [index, setIndex] = useState(0);

  const router = useRouter() ;
  return (
    <div
      className={style.banner}
      onClick={() => {
        setIndex(index + 1);
      }}
    >
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold drop-shadow-lg">
          where every event finds its venue
        </h1>
        <p className="text-xl mt-3 drop-shadow-md">
          Book the perfect venue for meetings and events
        </p>
      </div>
        <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent' onClick={(e)=>{e.stopPropagation(); router.push('venue') ;}}>
            Select Venue
        </button>
    </div>
  );
}
