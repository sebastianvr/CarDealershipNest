import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';


@Injectable()
export class CarsService {


    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
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
}

