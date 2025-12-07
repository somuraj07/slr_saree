import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function POST(request: Request) {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in the environment variables.");
    }
    try {
        const body = await request.json();
        const { username, password } = body;
        if (!username || !password) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 } );
        }

     const user = await prisma.admin.findUnique({where:{username}});
        if (!user) {
            return NextResponse.json({ error: "Invalid username or password" }, { status: 401 } );
        }
       if(!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ error: "Invalid username or password" }, { status: 401 } );
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: "1h" }
        );
        return NextResponse.json({ message: "Signin successful", token }, { status: 200 } );
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error in signin" }, { status: 500 } );
    }
}