import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic"
import { NextResponse } from "next/server";

// {params} --- It is used to extract values from the URL parameters.

export async function PUT(request, { params }) {
    try {
      // Extracting id from params. params has a property named id.
      const { id } = params;
        const { newTitle: title, newDescription: description } = await request.json();
      console.log(title,description )
        await connectMongoDb();
  
      // Update the document in the Topic collection
      const topic = await Topic.findByIdAndUpdate(id, { title, description });
        return NextResponse.json({ topic, status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.error("Internal Server Error", { status: 500 });
    }
  }
  

// Get id

export async function GET(request, {params}){
    const {id} = params
     await connectMongoDb()
     const topic = await Topic.findOne({_id:id})
     return NextResponse.json({topic, status:201})

}