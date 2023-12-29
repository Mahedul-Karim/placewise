import { NextResponse } from "next/server";
import stripe from "@/components/util/stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const url = headers().get("origin");
    const { productId,email } = await req.json();
    console.log(productId);
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

    return NextResponse.json({ url: session.url! });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({
      message: err.message,
    });
  }
}
