import Image from "next/image";
export default async function VenueDetailPage({params} : {params : Promise<{vid:string}>}) {
    const {vid} = await params ;

     const mockVenueRepo = new Map() ;
     mockVenueRepo.set("001",{venueName:"The Bloom Pavilion", imgSrc:"/img/bloom.jpg"}) ;
     mockVenueRepo.set("002",{venueName:"Spark Space", imgSrc:"/img/sparkspace.jpg"}) ;
     mockVenueRepo.set("003",{venueName:"The Grand Table", imgSrc:"/img/grandtable.jpg"}) ;
    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={mockVenueRepo.get(vid).imgSrc} alt={mockVenueRepo.get(vid).venueName} width={0} height={0} sizes="100vw" className="w-[30%] rounded-lg"/>
                <div className="text-md text-left ml-5">{mockVenueRepo.get(vid).venueName}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{vid:'001'}, {vid:'002'}, {vid:'003'}] ;
}