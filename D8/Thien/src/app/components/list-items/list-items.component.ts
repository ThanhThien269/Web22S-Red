import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor() { }
  public ListItem:Array<Item> =[
    {name:"Abeldo",
    price:100000,
    photoUrl:"../../../assets/images/abeldo.jfif"},
    {name:"Ace",
    price:100000,
    photoUrl:"../../../assets/images/ace.jfif"},
    {name:"Gingameth",
    price:100000,
    photoUrl:"../../../assets/images/ginga.jfif"},
    {name:"Kaido",
    price:100000,
    photoUrl:"../../../assets/images/kaido.jfif"},
    {name:"Luffy",
    price:100000,
    photoUrl:"../../../assets/images/luf.jfif"},
    {name:"Robin",
    price:100000,
    photoUrl:"../../../assets/images/robin.jfif"},
    {name:"Robin",
    price:100000,
    photoUrl:"../../../assets/images/robin2.jfif"},
    {name:"Shoto",
    price:100000,
    photoUrl:"../../../assets/images/shoto.jfif"},

  ]
  ngOnInit(): void {
  }

}
