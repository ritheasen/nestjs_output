import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiTags , ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse} from '@nestjs/swagger';
import { Room } from './entities/room.entity';

@ApiTags('room')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ApiCreatedResponse({ type: Room })
  @ApiBadRequestResponse()
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @ApiOkResponse({type: Room, description: 'All room found'})
  @ApiBadRequestResponse()
  @Get('allRooom')
  findAll() {
    return this.roomService.findAll();
  }

  @ApiOkResponse({type: Room, description: 'Single room found'})
  @ApiBadRequestResponse()
  @Get(':roomNum')
  findOne(@Param('roomNum') id: string) {
    return this.roomService.findOne(+id);
  }

  @Patch(':roomNum')
  update(@Param('roomNum') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }

  @ApiOkResponse({type: Room, description: 'Single room deleted'})
  @ApiBadRequestResponse()
  @Delete(':roomNum')
  remove(@Param('roomNum') id: string) {
    return this.roomService.remove(+id);
  }
}
