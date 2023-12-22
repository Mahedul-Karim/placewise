//@ts-nocheck
import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/components/util/cloudinary";
import { cookies, headers } from "next/headers";
import { initialFirebase } from "@/lib/firebase-admin";
import { auth } from "firebase-admin";
import prisma from "@/lib/prisma";

initialFirebase();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const header = headers();

    const idToken = header.get("authorization")?.split(" ")[1];
    
    const sessionCookie = await auth().createSessionCookie(idToken!, {
      expiresIn: 60 * 60 * 24 * 5 * 1000,
    });

    const reqBody = await req.json();
    const { firstName, lastName, email, avatar } = reqBody;

    const result = await cloudinary.v2.uploader.upload(avatar, {
      folder: "avatars",
    });
    
    const user = await prisma.user.create({
        data:{
            email:email,
            firstName:firstName,
            lastName:lastName,
            avatar:result.url
        }
    })

    cookies().set("session", sessionCookie, {
      secure: true,
    });
    return NextResponse.json({ status:'success',user });
  } catch (err: any) {
    return NextResponse.json({ status:'failed',message: err }, { status: 500 });
  }
}
