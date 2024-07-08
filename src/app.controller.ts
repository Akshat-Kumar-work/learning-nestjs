import { Controller, UseGuards ,Request } from "@nestjs/common";
import { Post ,Get} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";




@Controller('app')
export class MainController{
    constructor(private readonly authService:AuthService){}

    @Post('/login')
    @UseGuards(AuthGuard('local'))
    login(@Request() req):string[]{
        //authentication complete
        //we have to generate jwt token
        const token = this.authService.generateToken(req.user);
        return [req.user,token ];
    }



    @Get('/android-developer')
    @UseGuards(AuthGuard('jwt'))
    androidDevData():string{
        return "this is private data for android dev"
    }



}