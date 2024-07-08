import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express"

@Injectable()
export class UserGuard implements CanActivate{

    key :string = "akshat is here"

    canActivate(context: ExecutionContext): boolean  {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();


        if(request.header("key")=== undefined){
            return false;
        }
        
        return request.header('key')=== this.key;
    }
}