import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { IUserId, IUserPost } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userPostRepository: Repository<UserEntity>,
  ) {}

  createUser(createUserData: IUserPost): Observable<IUserPost> {
    return from(this.userPostRepository.save(createUserData));
  }

  getUser(userIdData: IUserId): Observable<IUserPost> {
    return from(this.userPostRepository.findOneBy(userIdData));
  }
}
