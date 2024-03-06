import bcrypt from "bcrypt"
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, name, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword
        }
        // prisma db deki user tablosunda veri oluşturdum. 
        // bu veri urle gelen email name ve password(hashlendigim) ile oluşturdum
    });
    return NextResponse.json(user);//Nextin serverina veri gonderir
}