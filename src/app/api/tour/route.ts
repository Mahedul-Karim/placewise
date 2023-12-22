import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/components/util/cloudinary";


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
      include: {
        images: {
          select:{
            url:true
          }
        },
        itineary: {
          select:{
            title:true,
            description:true,
            image:true
          }
        },
        reviews: true,
      },
    });

    if (tours.length === 0) {
      return NextResponse.json({
        status: "failed",
        message: "No tours exists at this moment!",
      });
    }

    return NextResponse.json({
      status: "success",
      tours,
    });
  } catch (err:any) {
    return NextResponse.json({
      status: "failed",
      message: err.message,
    });
  }
}
