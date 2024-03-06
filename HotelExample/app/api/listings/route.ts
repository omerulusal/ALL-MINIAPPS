import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
    const user = await getCurrentUser();
    if (!user) {
        return NextResponse.error();
    }

    const govde = await request.json();
    const { imageSrc, category, roomCount, bathroomCount, guestCount, location, title, description } = govde;
    Object.keys(govde).forEach((val: any) => {
        if (!govde[val]) {
            return NextResponse.error();
        }
    });
    const listing = await prisma.listing.create({
        data: {
            imageSrc,
            category,
            roomCount,
            locationValue: location.value,
            userId: user.id
        }
    });

    if (!listing) {
        return NextResponse.error();
    }
    return NextResponse.json(listing);
}