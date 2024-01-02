import { NextResponse } from "next/server";

export async function POST(req:Request){

    try{

    }catch(err:any){
        return NextResponse.json({
            status:'failed',
            message:err.message
        })
    }

}