import { Component, OnInit } from '@angular/core';
import {Pet} from '../model/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'Vũ Thị Ngọc Khánh',
    image: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/187544922_534673144334756_1617687190029677559_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Ot9U7Exd9qkAX8iYa8m&_nc_ht=scontent.fhan2-3.fna&oh=13ca58636b0a455ba3149886ee27176e&oe=60D62979'
  };
  constructor() { }

  ngOnInit() {
  }

}
