import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import USER from "@/model/auth";
connect();

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();
  try {
    const user = await USER.create({ name, email });
    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "create user failed" },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest) {
  try {
    const user = await USER.find();
    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "get user failed" }, { status: 500 });
  }
}
