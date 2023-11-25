import Link from "next/link";
import RemoveButton from "@/components/RemoveButton";
import { HiPencilAlt } from "react-icons/hi"


const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };
  

export default async function TopicList(){
    const { topics } = await getTopics();
    return (
        <>
        {
        topics.map((t)=>(
            <div key={t._id} className="flex justify-between items-center my-5 border border-slate-300 p-2">
                <div>
                    <h1 className="font-bold">{t.title}</h1>
                    <p className="mt-2">{t.description}</p>
                </div>
                <div className="icons flex items-center gap-2">
                
                {/* <FaTrash size={24} /> */}
                <RemoveButton id={t._id}/>
                
                <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24}/>
                </Link>
                </div>

            </div>
        ))}
        </>
    )
}