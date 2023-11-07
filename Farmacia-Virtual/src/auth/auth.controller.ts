import { Post, Controller, Body } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth-login.dto";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { AuthForgetDTO } from "./dto/auth-forget.dto";
import { AuthResetDTO } from "./dto/auth-reset.dto";
import { UsersService } from "src/services/users.service";


@Controller('auth')
export class AuthController{

    constructor(private readonly userService: UsersService){}

    @Post('login')
    async login(@Body() body: AuthLoginDTO){
    }

    @Post('register')
    async register(@Body() body: AuthRegisterDTO){
    }

    @Post('forget')
    async forget(@Body() body: AuthForgetDTO){
    }

    @Post('reset')
    async reset(@Body() body: AuthResetDTO){
    }
}