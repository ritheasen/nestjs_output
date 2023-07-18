import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength } from 'class-validator';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
    @ApiProperty()
    @IsString()
    @MaxLength(20)
    name: string;

    @ApiProperty()
    @IsString()
    @MaxLength(20)
    title: string;

    @ApiProperty()
    @IsString()
    @MaxLength(50)
    description: string;
}
