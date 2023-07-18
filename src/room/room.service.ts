import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class RoomService {
  constructor(@InjectRedis() private readonly client: Redis) {}

  create(createRoomDto: CreateRoomDto): Promise<any> {
    const newRoom = { 
      roomNum: createRoomDto.roomNum, 
      name: createRoomDto.name, 
      title: createRoomDto.title, 
      description: createRoomDto.description };
    return this.client.hmset(`room:${createRoomDto.roomNum}`, newRoom);
  }

  findAll() {
    return this.client.keys('room:*').then((keys) => {
      return Promise.all(keys.map((key) => {
        return this.client.hgetall(key);
      }));
    })
    // return `This action returns all room`;
  }

  findOne(roomNum: number): Promise<any> {
    return this.client.hgetall(`room:${roomNum}`);
  }

  update(roomNum: number, updateRoomDto: UpdateRoomDto) {
    const updateRoom = { 
      name: updateRoomDto.name, 
      title: updateRoomDto.title, 
      description: updateRoomDto.description };
    return this.client.hmset(`room:${roomNum}`, updateRoom);
  }

  remove(roomNum: number): Promise<any> {
    return this.client.del(`room:${roomNum}`);
  }
}
