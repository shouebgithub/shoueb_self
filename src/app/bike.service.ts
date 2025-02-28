import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
motorbikes = ["Yamaha", "Honda", "Pulsar"];
getbikes():string[] {
  return  this.motorbikes
}
getbike(id:number){
  return this.motorbikes[id];
}
  constructor() { }
}
