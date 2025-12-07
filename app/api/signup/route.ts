import { NextResponse } from "next/server";

export async function POSt(req: Request) {
    try {
        const body = await req.json();
        const { email, password ,name} = body;
        if(!email || !password || !name){
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }
        const existingUser = await prisma.admin.findUnique({
            where: { username: email },
        });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 409 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.admin.create({
            data: {
                username: email,
                password: hashedPassword,
                name: name
            },
        });
        return NextResponse.json({ message: "User created successfully", user }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}