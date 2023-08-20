import {connect} from '@/dbConfig/dbConfig'
import Topic from '@/models/topicModel'
import {NextResponse } from 'next/server'

export async function PUT(request,{params}){
    const {id}=params;
    const {newTitle:title,newDescription:description} = await request.json();
    await connect();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Topic updated"},{status:200});
}

export async function GET(request,{params}){
    const {id}=params;
    await connect();
    const topic =await Topic.findOne({__id:id});
    return NextResponse.json({topic},{status:200})
}