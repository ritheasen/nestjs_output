import { ApiProperty } from "@nestjs/swagger";

export class Room {
    @ApiProperty()  
    roomNum: number;

    @ApiProperty()  
    name: string;

    @ApiProperty()  
    title: string;

    @ApiProperty()  
    description: string;

}
