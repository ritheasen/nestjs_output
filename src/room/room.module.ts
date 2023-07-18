import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomModule {}
