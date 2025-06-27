import { signToken } from "@/lib/jwt";
import { encryptPassword } from "@/lib/bcrypt";
import { NextResponse } from "next/server";
import { db } from "@/drizzle/index"
import { userTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function POST(req : Request) {

    const { name, email, password } = await req.json();

if (!name || !email || !password) {
        return NextResponse.json(
            { error: "All fields are required" , success: false },
            { status: 400 }
        );
    }

    // check if user already exists
    const existingUser = await db
        .select()
        .from(userTable)
        .where(eq(userTable.email, email))
        .then(users => users[0]);

if(existingUser) {
    return NextResponse.json(
        { error: "User already exists", success: false },
        { status: 409 }
       
    );
}
    // create new user
    const newUser = {
        name,
        email,
        password: await encryptPassword(password)
    };

    await db.insert(userTable).values(newUser);

    // generate JWT token
    const token = signToken({ email });


    const res =  NextResponse.json(
        { message: "User created successfully", success: true, token, user: newUser },
        { status: 201 }
    );
    // Set the token in a cookie
    res.cookies.set("token", token, { httpOnly: true });

    return res;
}



