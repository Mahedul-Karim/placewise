import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import { auth } from "firebase-admin";
import { initialFirebase } from "@/lib/firebase-admin";
initialFirebase();
export async function POST(request: NextRequest, response: NextResponse) {
  const header = headers();
  const idToken = header.get("authorization")?.split(" ")[1];
  const decodeToken = await auth().verifyIdToken(idToken!);
  if (decodeToken) {
    const sessionCookie = await auth().createSessionCookie(idToken!, {
      expiresIn: 60 * 60 * 24 * 5 * 1000,
    });
    cookies().set("session", sessionCookie, {
      secure: true,
    });
  } else {
    return NextResponse.json({
      message: "Invalid credentials!",
    });
  }

  return NextResponse.json({ status: "success" });
}
