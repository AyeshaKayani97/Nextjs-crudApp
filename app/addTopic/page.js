"use client"
import {useState} from "react"
import {useRouter} from "next/navigation"

export default function AddTopic(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!title || !description){
            alert("title and description are required")
            return;
        }
        try{
            const res = await fetch("http://localhost:3000/api/topics",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({title,description})

            })
            if (res.ok){
                router.push("/")
                router.refresh("/")
            }else{
                throw new Error("Failed to create topic..")
            }

        }catch(e){

        }
    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
             type="text" placeholder="Topic Title" 
             className="border border-slate-500 py-2 px-8" 
             value={title}
             onChange={(e)=>setTitle(e.target.value) }
             />

             <input
             type="text" placeholder="Topic Description"
             className="border border-slate-500 py-2 px-8" 
             value={description}
             onChange={(e)=>setDescription(e.target.value) }   
             />
             <button type="submit" className="bg-green-600 py-2 px-4 w-fit font-bold text-white">Add Topic</button>
        </form>
    )
}