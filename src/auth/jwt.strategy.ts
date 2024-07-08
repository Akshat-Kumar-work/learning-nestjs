import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    //here super is calling the constructor of parent class which is PassportStrategy class
        constructor(){
            super({
                jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration:false,
                secretOrKey:"akshatkey"
            });
        }

        validate(payload:any):any{
        return payload
        }
}