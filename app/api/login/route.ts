import {  NextResponse } from "next/server";
import { db } from "@/drizzle/index";
import { decryptPassword } from "@/lib/bcrypt";
import { userTable } from "@/drizzle/schema";
import { signToken } from "@/lib/jwt";
import { eq } from "drizzle-orm";



export async function POST(req: Request) {
const { email, password } = await req.json()
if(!email || !password ){
    return NextResponse.json(
        { error: 'All fields are required', success:false},
        { status: 400}
    )
}
// Check if user exists
const user = await db.select()
.from(userTable)
.where(eq(userTable.email, email))
.then(users => users[0])

if(!user){
    return NextResponse.json({
        error: 'Invalid email', success: false
    }, {
        status: 404
    })
}
    // Email exists. verify password.
    const isCorrectPassword = await decryptPassword( password, user.password)
    if(!isCorrectPassword){
        return NextResponse.json(
            { error: 'Incorrect password', success: false},
            { status: 403}
        )
    }

    // generate JWT token
    const token = signToken({ email })

    const res = NextResponse.json(
        { message: 'User Logged in successfully', success: true},
        { status: 200}
    )
    res.cookies.set('token', token, { httpOnly: true})

    return res;
}