import { Component, Input, OnInit } from '@angular/core';
import { StoreData } from '../../../services/models/store-data.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() store: StoreData;

  constructor() {}

  ngOnInit(): void {}
}
