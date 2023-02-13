import { Injectable } from '@nestjs/common';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';

import { CARS_SEED } from './data/brands.seed';
import { BRANDS_SEED } from './data/cars.seed';


@Injectable()
export class SeedService {



  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService
  ) { }

  populateDB() {

    // CARS_SEED
    // BRANDS_SEED
    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED)

    return 'Seed Excecuted'

  }
}
