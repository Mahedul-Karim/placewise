import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const request = await req.json();

  const { id } = request;

  if (!id) {
    return NextResponse.json({
      status: "failed",
      message: "Please login again!",
    });
  }
  const user = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      isVendor: true,
    },
  });

  return NextResponse.json({
    status: "success",
    message: "Vendor account created successfully!",
    user
  });
}
