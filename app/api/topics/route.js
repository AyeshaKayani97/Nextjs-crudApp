import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic"
import { NextResponse } from "next/server";



export  async function POST(request){
    const { title, description } = await request.json();
    connectMongoDb()
    await Topic.create({
        title,
        description
    })
    return NextResponse.json({
        success:"Topic created",
        status:201

    })

}
// Get all posts

export async function GET(request){
    connectMongoDb()
    const topics = await Topic.find()
    return NextResponse.json({topics})

}
// delete topic 
export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    connectMongoDb()
     await Topic.findByIdAndDelete(id)
    return NextResponse.json({
        success:"Topic has been deleted",
        status:201

    })

}
// update topic 
// export default  async function (request){
//     connectMongoDb()
//     Top
//     const topic = await Topic.find()
//     NextResponse.json({
//         success:topic,
//         status:201

//     })

// }