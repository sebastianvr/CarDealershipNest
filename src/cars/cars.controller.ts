import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {


    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById(

        /**
         * ParseUUIDPipe se asegura de que el valor recibido por un parámetro en el 
         * controlador o servicio sea un UUID válido. Si el valor no es un UUID válido, el pipe 
         * lanzará una excepción para indicar que el formato no es válido.
         */
        @Param('id', ParseUUIDPipe) id: string) {
        /**
         * Imprime un objeto en la consola con una propiedad llamada "id". El símbolo " + " 
         * antes de la variable "id" significa que se está haciendo una operación de conversión
         * a número (también conocida como "unary plus").
         * Esta línea de código toma la variable "id" y la convierte en un número antes 
         * de crear un objeto con una propiedad llamada "id" con ese valor convertido.
         */
        // console.log({ id : +id});

        const car = this.carsService.findOneById(id)

        /**
         * Nest puede lanzar un error 500 al cliente si existen errores del lado del servidor
         */
        // throw new Error('Auxilio')

        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return {
            car,
            method: 'GET'
        }
    }


    /**
     * Cuando es llamado este metodo, primero tiene que confirmar la informacion 
     * esto segun lo definido en CreateCarDto, entonces despues de validar podemos 
     * estar seguros de que lo que viene esta okey
     */
    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto)
    }

    @Patch(':id')
    patchCar(
        @Body() body,
        @Param('id') id: string) {
        return {
            id,
            body,
            method: 'PATCH'
        }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: string) {
        return {
            id,
            method: 'DELETE'
        }
    }
}
