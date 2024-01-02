import { NextResponse } from "next/server";
import stripe from "@/components/util/stripe";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const url = headers().get("origin");
    const { productId,email,startDate,endDate,duration,userId,vendorId } = await req.json();
    
    const product = await stripe.products.search({
      query: `metadata[\'dbId\']:\'${productId}\'`,
    });
    const session = await stripe.checkout.sessions.create({
      currency: "usd",
      customer_email: email,
      mode: "payment",
      line_items: [
        {
          price: product.data[0].default_price as string,
          quantity: 1,
        },
      ],
      success_url: `${url}/success`,
      cancel_url: `${url}`,
    });

    const tourEndDate = endDate + (duration * 100000000);

    await prisma.bookings.create({
      data:{
        startData : startDate,
        endDate:tourEndDate,
        tourDetails:productId,
        userId,
        vendorId
      }
    })

    return NextResponse.json({ url: session.url! });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({
      message: err.message,
    });
  }
}
