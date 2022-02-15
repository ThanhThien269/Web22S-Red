import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }
  
  public ListItem: Array<Item> = [
    {
      photourl:"../../../assets/images/Awayout.jpg",
      name: "A way out",
      price: "400.000"
    },
    {
      photourl:"../../../assets/images/Battlefield4.jpg",
      name: "Battlefield 4",
      price: "500.000"
    },
    {
      photourl:"../../../assets/images/Blasphemous.jpg",
      name: "Blasphemos",
      price: "200.000"
    },
    {
      photourl:"../../../assets/images/DevilMayCry5.jpg",
      name: "Devil May Cry 5",
      price: "1.000.000"
    },
    {
      photourl:"../../../assets/images/FiFA21.jpg",
      name: "FIFA 21",
      price: "700.000"
    },
    {
      photourl:"../../../assets/images/Forza.jpg",
      name: "Forza Horizon 5",
      price: "900.000"
    },
    {
      photourl:"../../../assets/images/genshin.jpg",
      name: "Genshin Impact",
      price: "Free"
    },
    {
      photourl:"../../../assets/images/GTA5online.jpg",
      name: "GTA Grand Thieft Auto 5 online",
      price: "1.500.000"
    },
    {
      photourl:"../../../assets/images/Pubg.jpg",
      name: "PlayerUnknown's Battleground",
      price: "1.000.000"
    },
    {
      photourl:"../../../assets/images/Subnautica.jpg",
      name: "Subnautica",
      price: "300.000"
    }
    
  ]
  
  ngOnInit(): void {
  }

}
