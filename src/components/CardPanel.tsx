'use client'

import Link from "next/link";
import Card from "./Card"
import { useReducer } from "react"

export default function CardPanel() {
    const ratingReducer = (ratingList:Map<string,number>, action:{type:string, name:string, rating:number}) => {
        switch(action.type) {
            case 'add' : {
                const newMap = new Map(ratingList) ;
                newMap.set(action.name,action.rating) ;
                return newMap ;
            }
            case 'remove' : {
                const newMap = new Map(ratingList) ;
                newMap.delete(action.name) ;
                return newMap ;
            }
            default : return ratingList ;
        }
    }

    const [ratingList, dispatchRating] = useReducer(ratingReducer,new Map<string,number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0],
    ]
    ))

    const mockVenueRepo = [
        {vid: '001', venueName:"The Bloom Pavilion", imgSrc:"/img/bloom.jpg"},
        {vid: '002', venueName:"Spark Space", imgSrc:"/img/sparkspace.jpg"},
        {vid: '003', venueName:"The Grand Table", imgSrc:"/img/grandtable.jpg"},
    ]

    return (
    <div>
        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
        {
            mockVenueRepo.map((venue)=> (
                <Link href={`venue/${venue.vid}`} className="w-1/5">
                <Card venueName={venue.venueName} imgSrc={venue.imgSrc} onRating={(venue:string,rate:number)=>dispatchRating({type:'add', name:venue, rating:rate})}/>
                </Link>
            ))
            
        }
        </div>
        <div className="flex flex-col text-center">
            <div className="w-full text-xl font-semibold">Venue List with Ratings : {ratingList.size}</div>
            { Array.from(ratingList).map(([venue, rating])=>(<div className='text-lg' key={venue} data-testid={venue} onClick={()=>dispatchRating({type:'remove', name:venue, rating:rating})}>{venue} : {rating}</div>) ) }      
        </div>
    </div>
    )

}