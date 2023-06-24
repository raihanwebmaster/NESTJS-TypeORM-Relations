/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { Employee } from './employee.entity';
import { ContactInfo } from './contact-info.entity';
import { Meeting } from './meeting.entity';
import { Task } from './task.entity';
// TypeOrmModule.forFeature([User])

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Employee, ContactInfo,  Meeting, Task]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
