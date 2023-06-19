import { IsEmail, IsNumber ,IsString , MinLength} from "class-validator";
import { IsUUID } from "class-validator";

export class userDTO
{

    
    id:number;

    @IsString()
    @MinLength(3)
    name:string;

    @IsEmail()
    email:string;

    @IsNumber()
    age:number;

    
    @IsString()
    @MinLength(8)
    password:string;

}