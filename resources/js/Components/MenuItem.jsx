import { Link } from "@inertiajs/react";

export default function MenuItem({link,icon,text,dropdown=false,active=false}) {
    return (
        <Link href={link} className={`flex items-center gap-3 font-light text-gray-500 hover:text-violet-600 group hover:cursor-pointer ${active && 'text-violet-600'}`}>
            <i className={`${icon} px-2 py-1 transition-all ease-in-out bg-white border border-gray-100 rounded-md shadow-md group-hover:border-violet-600 ${active && 'border-violet-600'}`}/>
            <div className="flex justify-between w-full">
                <div className="transition-all ease-in-out">{text}</div>
                {dropdown && <i className="transition-all ease-in-out bi-chevron-right group-hover:rotate-90"></i>}
            </div>
        </Link>
    )
}