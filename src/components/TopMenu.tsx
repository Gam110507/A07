import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
    return(
        <div className="flex flex-row-reverse h-[50px] w-full bg-white border-t border-b border-t-gray-600 border-b-gray-600 fixed top-0 z-30 items-center" >
            <Image src='/img/logo.png' alt="logo" width={0} height={0} sizes="100vh" className="h-full w-auto"/>
            <TopMenuItem label="Booking" linkUrl="/booking"/>
        </div>
    ) ;
}