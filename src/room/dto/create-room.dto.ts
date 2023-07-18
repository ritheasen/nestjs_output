import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateRoomDto {
    @ApiProperty()
    @IsNumber()
    @MaxLength(5)
    roomNum: number;

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
