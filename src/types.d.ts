import { User } from "@prisma/client"
import { Prisma } from '@prisma/client';

type ApiParams={
    endpoint:string;
    options:{
        body?:any;
        headers?:any;
        method:string;
    }
}

type SafeUser=Omit<User,"avatar"> &{
    avatar:string
}

type SafeTours=Prisma.ToursGetPayload<{
    include:{
        images:true;
        itineary:true;
        reviews:true;
    }
}>