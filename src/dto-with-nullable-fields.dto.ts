import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class DtoWithNullableFieldsDto {

    @ApiPropertyOptional()
    private readonly query: string | null;

    @ApiPropertyOptional()
    private readonly orderBy: string | null;

    @ApiProperty()
    private readonly offset: number;
}
