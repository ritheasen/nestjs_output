import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    RedisModule.forRoot({
      readyLog: true,
      config : {
        host: 'localhost',
        port: 6379
      }
      // config : {
      //   url: process.env.REDIS_URL,
      // }
    }),
    RoomModule,
  ],
})
export class AppModule {}
