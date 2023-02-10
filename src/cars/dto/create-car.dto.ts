import { IsString, IsUUID, MinLength } from "class-validator"

export class CreateCarDto {


   /**
    * El decorador @IsString es un validador que se aplica a una propiedad de clase, en este caso la 
    * propiedad brand, para asegurarse de que su valor sea una cadena. Si el valor no es una cadena, 
    * se producirá un error y se mostrará el mensaje de error personalizado Custom message for brand.
    */
   @IsString({ message: 'Custom message for brand' })
   readonly brand: string

   @IsString()
   @MinLength(3, { message: 'Custom message for model' })
   readonly model: string

} 