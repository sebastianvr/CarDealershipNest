import { IsString, MinLength, IsUUID, IsOptional } from 'class-validator';

export class UpdateCarDto {

   @IsOptional() 
   @IsString()
   @IsUUID()
   readonly id?: string

   @IsOptional()
   @IsString()
   readonly brand?: string
   
   @IsOptional()
   @IsString()
   @MinLength(3)
   readonly model?: string

} 