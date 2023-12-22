import { NextRequest,NextResponse } from "next/server";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";


export async function GET(req:NextRequest,res:NextResponse){

    try{

        const cookie = cookies().get("session")?.value;

        const verifyCookie = await auth().verifySessionCookie(cookie!);

        await auth().revokeRefreshTokens(verifyCookie.sub)

        cookies().delete("session");

        return NextResponse.json({
            status:'succcess'
        })

    }catch(err:any){
        return NextResponse.json({
            status:'failed',
            message:err.message
        })
    }

}