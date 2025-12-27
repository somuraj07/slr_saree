import  prisma  from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
    await prisma.category.findMany({
      include: { products: true },
    })
  );
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error in category" }, { status: 500 } );
  }
  
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

  const category = await prisma.category.create({
    data,
  });

  return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error in category" }, { status: 500 } );
  }
  
}
