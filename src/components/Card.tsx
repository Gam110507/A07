'use client'

import style from './card.module.css' ;
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material' ;
import { useState } from 'react';

export default function Card({venueName, imgSrc, onRating} : {venueName:string, imgSrc:string, onRating:Function}) {
    const [rating, setRating] = useState<number | null>(0) ;
    return (
        <InteractiveCard>
        <div className='w-full h-[70%] rounded-lg relative'>
            <Image src={imgSrc} alt='meeting' fill={true} className='rounded-t-lg object-cover'/>
        </div>
        <div className='p-[10px] h-[30%]'>
            <div className='text-blue-700 font-semibold text-lg'>{venueName}</div>
            <Rating id={venueName + ' Rating'} name={venueName + ' Rating'} data-testid={venueName + ' Rating'} onChange={(event, value)=>{setRating(value); onRating(venueName, value ?? 0) }} value={rating}/>
        </div>
        </InteractiveCard>

    ) ;
}