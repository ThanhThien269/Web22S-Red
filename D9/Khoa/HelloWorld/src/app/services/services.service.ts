import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  
  array = [
    {
      name:'Ducati',
      newPrice:70, 
      Image:"./../../../assets/Image/Model-Menu-MY20-Panigale-V4-Red (1).png",
      Quantity: 0
    },

    {
      name:'Ducati',
      newPrice:100, 
      Image:"./../../../assets/Image/2.png",
      Quantity: 0
    },

    {
      name:'Ducati',
      newPrice:90, 
      Image:"./../../../assets/Image/3.png",
      Quantity: 0

    },

    {
      name:'Ducati',
      newPrice:100, 
      Image:"./../../../assets/Image/2.png",
      Quantity: 0
    }
  ]
}


    
