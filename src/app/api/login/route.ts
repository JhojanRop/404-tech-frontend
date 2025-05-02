// app/api/login/route.ts
import { NextResponse } from "next/server";
import { userdata } from '@/lib/data/usersdata';

export async function POST(req: Request) {
    const { username, password } = await req.json();

    const user = userdata.find(
        (u) => u.username.toLowerCase === username.toLowerCase && u.password === password
    );

    if (!user) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
        id: user.id,
        username: user.username,
        email: user.email,
        message: "Login successful"
    });
}
