import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user: IUser;
  @Input('index') i: number;
  @Input() isOdd: boolean;

  constructor() { }

  ngOnInit() {
  }
}
