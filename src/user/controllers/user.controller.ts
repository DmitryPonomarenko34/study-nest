import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUserId, IUserPost } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserData: IUserPost): Observable<IUserPost> {
    return this.userService.createUser(createUserData);
  }

  @Get()
  getUser(@Body() userIdData: IUserId): Observable<IUserPost> {
    return this.userService.getUser(userIdData);
  }
}
