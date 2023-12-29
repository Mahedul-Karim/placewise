import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/components/util/cloudinary";
import stripe from "@/components/util/stripe";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const {
      name,
      placesCovered,
      startPoint,
      endPoint,
      duration,
      price,
      totalCapacity,
      category,
      description,
      images,
      itineary,
      creatorId,
    } = await req.json();

    const tourImages = [];
    const itineryItems = [];
    for (const img of images) {
      const cloud = await cloudinary.v2.uploader.upload(img, {
        folder: "avatars",
      });
      tourImages.push({ publicId: cloud.public_id, url: cloud.url });
    }

    for (const item of itineary) {
      const cloud = await cloudinary.v2.uploader.upload(item.image, {
        folder: "avatars",
      });
      itineryItems.push({
        image: cloud.url,
        title: item.title,
        description: item.description,
      });
    }

    const tour = await prisma.tours.create({
      data: {
        name,
        description,
        placeCovered: +placesCovered,
        startPoint,
        endPoint,
        duration,
        price: +price,
        capacity: +totalCapacity,
        category,
        images: {
          create: tourImages,
        },
        itineary: {
          create: itineryItems,
        },
        reviews: {
          create: [],
        },
        creatorId,
      },
    });
    await stripe.products.create({
      name,
      default_price_data: {
        currency: "usd",
        unit_amount: +price,
      },
      images: [tourImages[0].url],
      metadata: {
        dbId: tour.id,
      },
    });

    return NextResponse.json({
      status: "success",
      tour,
    });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({
      status: "failed",
      message: err.message,
    });
  }
}

export async function GET() {
  try {
    const tours = await prisma.tours.findMany({
      select: {
        name: true,
        id: true,
        images: {
          select: {
            url: true,
          },
        },
        ratings: true,
        duration: true,
        placeCovered: true,
        price: true,
        capacity: true,
      },
    });

    const total = await prisma.tours.count();

    if (tours.length === 0) {
      return NextResponse.json({
        status: "failed",
        message: "No tours exists at this moment!",
      });
    }
    const stripeData = await stripe.prices.list();
    const productData = await stripe.products.list();
    return NextResponse.json({
      status: "success",
      tours,
      total,
      stripeData,
      productData,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: "failed",
      message: err.message,
    });
  }
}
export async function PUT() {
  const pd = await stripe.products.search({
    query: `metadata[\'dbId\']:\'6585850376443244e7579b47\'`,
  });

  return NextResponse.json({ pd });
}
