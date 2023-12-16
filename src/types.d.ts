

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