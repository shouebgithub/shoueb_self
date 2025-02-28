import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
cars = ["sunflower GT", "Flexus GT", "Sprout Mach One"];

getCars():string[] {
  return this.cars
}

getCar(id:number){
  return this.cars[id];
}

  constructor() { }
}
