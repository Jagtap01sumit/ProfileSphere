import RemoveBtn from "@/components/RemoveBtn"
import {HiPencilAlt} from "react-icons/hi";
import Link from 'next/link';
export default function TopicList(){
    return(
        <main >
        <div className="p-4 border border-slate-300 my-3  flex justify-between gap-5 items-start ">
           <div>
            <h2 className="font-bold text-2xl">Experience</h2>
            <div> Description</div>
           </div>
           <div className="flex gap-2">
            <RemoveBtn/>
            <Link href={"/editTopic/123"}><HiPencilAlt size={24}/></Link>
           </div>
        </div>
        </main>
    )
}