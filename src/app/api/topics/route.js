import { connect} from "../../../dbConfig/dbConfig";
import Topic from "../../../models/topicModel";
import {NextResponse} from "next/server"

export async function POST(request) {
  const { title, description } = await request.json();
  await connect();

  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}
