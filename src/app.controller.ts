import { Controller, UseGuards ,Request } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";




@Controller('app')
export class MainController{
    constructor(){}

    @Post('/login')
    @UseGuards(AuthGuard('local'))
    login(@Request() req):string{
        return req.user;
    }
}