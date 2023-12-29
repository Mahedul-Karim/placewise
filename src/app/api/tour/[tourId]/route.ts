import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params={
    params:{
        tourId:string;
    }
}

export async function GET(req:NextRequest,{params:{tourId}}:Params){
    try{

        const tour = await prisma.tours.findUnique({
            where:{
                id:tourId
            },
            include:{
                images:true,
                itineary:true,
                reviews:true
            }
        })

        if(!tour){
            return NextResponse.json({
                status:'failed',
                message:'Invalid id!'
            })
        }

        const creator =await prisma.user.findUnique({
            where:{
                id:tour?.creatorId
            },
            select:{
                avatar:true,
                firstName:true,
                lastName:true
            }
        })

        return NextResponse.json({
            status:'success',
            tour,
            creator
        })

    }catch(err:any){
        return NextResponse.json({
            status:'failed',
            message:err.message
        })
    }
}