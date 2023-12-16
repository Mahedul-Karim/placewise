import { initialFirebase } from "@/lib/firebase-admin";
import prisma from "@/lib/prisma";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

initialFirebase();

export async function GET(req: NextRequest, res: NextResponse) {
  const cookie = cookies();

  const token = cookie.get("session")?.value;
  if (!token) {
    return NextResponse.json({});
  }
  const decodedToken = await auth().verifySessionCookie(token!);

  if (!decodedToken.email) {
    return NextResponse.json({ status: "failed", message: "Log in again!" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: decodedToken.email,
    },
  });

  return NextResponse.json({ status: "success", user });
}
