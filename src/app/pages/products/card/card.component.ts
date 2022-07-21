import { Component, Input, OnInit } from '@angular/core';
import { ToyData } from 'src/app/services/models/toys.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: ToyData;

  constructor() {}

  ngOnInit(): void {}
}
