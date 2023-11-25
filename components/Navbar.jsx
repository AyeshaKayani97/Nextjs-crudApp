import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-slate-800 text-white px-8 py-3 mt-7">
            <Link href={"/"}>AKCoding</Link>
            <Link className="bg-white text-black px-4 py-2 font-bold" href={"/addTopic"}>Add Topic</Link>

        </nav>
    )
}