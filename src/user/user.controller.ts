import { Controller,Body,Get ,Post, Param,HttpCode} from "@nestjs/common/decorators";
import { userDTO } from "./dto/user.dto";
//import { ValidationInterceptor } from "src/validation/validation.interceptor";
import { UserService } from "./user.service";
import { ParseIntPipe } from "@nestjs/common";

@Controller('/user')

export class UserController{
  constructor(private userService:UserService)
  {}
   /*users: any=[{}];
  @Get('/list')
  findUser():string{
    return  "hello";
  }
  */
  @Get('list')
  async getUserS(): Promise<userDTO[]> {
    return this.userService.findAll();
  }

  @Get('/list/:id')
   async getUserById(@Param('id') id){
    return await this.userService.getUserById(id);
  }
  
  /*
getUserById(@Param('id', ParseIntPipe) id: number):userDTO {
 return this.userService.getUserById(+id);
    //return user; 
}
*/

  @Post('adduser')
     create(@Body() user:userDTO){
    //  this.users.push(user);
    return this.userService.addUser(user);
     //return user;
     //6console.log(user);
    }
}