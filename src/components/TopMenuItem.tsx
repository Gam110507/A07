import Link from "next/link";

export default function TopMenuItem({linkUrl, label} : {linkUrl:string, label:string}) {
    return (
            <Link href={linkUrl} className="w-[120px] text-center font-medium !text-gray-600">{label}</Link>
    ) ;
}