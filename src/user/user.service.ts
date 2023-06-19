import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { userDTO } from './dto/user.dto';
import {v4 as uuidv4} from 'uuid';
@Injectable()
export class UserService {

  private currentId = 0;
  private readonly users:userDTO[] = [];
 
  getUserById(id: number) {
    //const user:userDTO =this.users.find(this.user)
  const user=this.users.find(user => user.id === id);
  if(user){
    return user;
    
  }
  throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  
  }


  addUser(user: userDTO):userDTO {
    const id=uuidv4();
    const newUser ={id, ...user};
    this.users.push(newUser);
    return newUser;
    
  } 

    /*const newUser={
      id:  ++ this.currentId,
      ...user
    }
    //this.currentId++;
   // user.id= this.currentId;
    //return this.users;
   // console.log(this.users);
    this.users.push(newUser);
    return newUser;
    //console.log(userDTO);
    */
  

  findAll(): userDTO[] {
    return this.users;
  }
}