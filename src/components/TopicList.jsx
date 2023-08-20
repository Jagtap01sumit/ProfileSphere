import RemoveBtn from "@/components/RemoveBtn"
import { HiPencilAlt } from "react-icons/hi";
import Link from 'next/link';



export default async function TopicList() {
    // const getTopic = async () => {
    //     try {
    //         const res = await fetch('api/topics', { cache: "no-store" })
    //         if (!res.ok) {
    //             throw new Error("Faliled to fetch topics");
    //         }
    //         return res.json();
    //     } catch (error) {
    //         console.log("Error loading topics:", error)

    //     }
    // };
    // const { topics } = await getTopic();


    return (
        <main >
            {/* {topics.map(t => ( */}




            <div className="p-4 border border-slate-300 my-3  flex justify-between gap-5 items-start ">
                <div>
                    <h2 className="font-bold text-2xl">title</h2>
                    <div>description</div>
                </div>
                <div className="flex gap-2">
                    <RemoveBtn />
                    {/* <Link href={`/editTopic/${t._id}`}><HiPencilAlt size={24} /></Link> */}
                </div>
            </div>
            {/* ))} */}
        </main>
    )
}