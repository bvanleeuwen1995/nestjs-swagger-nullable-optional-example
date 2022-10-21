import {Controller, Get, Logger, Query} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {DtoWithNullableFieldsDto} from './dto-with-nullable-fields.dto';
import {DtoWithOptionalFieldsDto} from './dto-with-optional-fields.dto';

@Controller()
@ApiTags('app')
export class AppController {

    private static LOGGER = new Logger('AppController');

    @ApiResponse({type: DtoWithNullableFieldsDto})
    @Get('DtoWithNullableFieldsDto')
    getDtoWithNullableFieldsDto(@Query() test: DtoWithNullableFieldsDto): DtoWithNullableFieldsDto {
        AppController.LOGGER.verbose('Logging incoming DTO nullable: {}', test);

        return new DtoWithNullableFieldsDto();
    }

    @ApiResponse({type: DtoWithOptionalFieldsDto})
    @Get('DtoWithOptionalFieldsDto')
    getDtoWithOptionalFieldsDto(@Query() test: DtoWithOptionalFieldsDto): DtoWithOptionalFieldsDto {
        AppController.LOGGER.verbose('Logging incoming DTO optional: {}', test)

        return new DtoWithOptionalFieldsDto();
    }
}
