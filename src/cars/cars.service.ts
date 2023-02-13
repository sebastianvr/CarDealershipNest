import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Injectable()
export class CarsService {


    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
    
    ]

    findAll() {
        // console.log(this.cars)
        return this.cars

    }

    findOneById(id: string) {
        // return this.cars[id]
        const car = this.cars.find(car => car.id === id)
        return car
    }

    create(createCarDto: CreateCarDto) {

        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(newCar)
        return newCar
    }

    update(id: string, updateCarDto: UpdateCarDto) {

        let carDB = this.findOneById(id);

        if (updateCarDto.id && (updateCarDto.id !== id))
            throw new BadRequestException(`Car id is not valid inside body`)

        this.cars = this.cars.map(car => {

            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto }
            }

            return car;
        })

        return carDB
    }

    delete(id: string) {

        let carDB = this.findOneById(id)

        if (!carDB)
            throw new BadRequestException(`Do not exist id ${id}`)

        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData( cars : Car[]){
        this.cars = cars
      }
}

