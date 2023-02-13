/**
 * PartialType : nos ayuda a extender un dto basado en otro dto
 * con la excepcion que PartialType hace que todos los
 * atributos de ese Dto sean OPCIONALES
 */
// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';import { UpdateCarDto } from '../../cars/dto/update-car.dto';
import { IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}


export class UpdateBrandDto{
    
    @IsString()
    @MinLength(1)
    readonly name: string
}