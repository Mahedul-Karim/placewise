import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import { auth } from "firebase-admin";
import { initialFirebase } from "@/lib/firebase-admin";
import prisma from "@/lib/prisma";
initialFirebase();
export async function GET(request: NextRequest, response: NextResponse) {
  const header = headers();
  const idToken = header.get("authorization")?.split(" ")[1];
  const decodeToken = await auth().verifyIdToken(idToken!);
  if (decodeToken) {
    const user = await prisma.user.findUnique({
      where: {
        email: decodeToken.email,
      },
    });
    if (!user) {
      return NextResponse.json({
        status: "failed",
        message: "User does not exists!",
      });
    }
    const sessionCookie = await auth().createSessionCookie(idToken!, {
      expiresIn: 60 * 60 * 24 * 5 * 1000,
    });
    cookies().set("session", sessionCookie, {
      secure: true,
    });
    return NextResponse.json({ status: "success", user });
  } else {
    return NextResponse.json(
      {
        message: "Invalid credentials!",
      },
      { status: 401 }
    );
  }
}
