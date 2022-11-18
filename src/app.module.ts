// Core
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

// Entity
import { UserEntity } from './user/entity/user.entity';
import { TaskEntity } from './task/entity';

const enviroment = process.env.NODE_ENV || 'development';
@Module({
  imports: [
    UserModule,
    TaskModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${enviroment}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      username: 'admin',
      port: 5432,
      password: 'root',
      entities: [UserEntity, TaskEntity],
      database: 'postgres',
      synchronize: true,
    }),
  ],
})
export class AppModule {}
