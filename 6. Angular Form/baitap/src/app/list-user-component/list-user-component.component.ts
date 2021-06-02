import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})
export class ListUserComponentComponent implements OnInit {
  listUser : User[] = [];
  constructor() { }

  ngOnInit() {
  }

}
