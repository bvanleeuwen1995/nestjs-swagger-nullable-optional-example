import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class DtoWithOptionalFieldsDto {

    @ApiPropertyOptional()
    private readonly query?: string;

    @ApiPropertyOptional()
    private readonly orderBy?: string;

    @ApiProperty()
    private readonly offset: number;
}
