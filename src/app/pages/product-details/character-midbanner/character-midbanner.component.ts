import { Component, Input, OnInit } from '@angular/core';
import { ToyData } from 'src/app/services/models/toys.model';

@Component({
  selector: 'app-character-midbanner',
  templateUrl: './character-midbanner.component.html',
  styleUrls: ['./character-midbanner.component.scss'],
})
export class CharacterMidbannerComponent implements OnInit {
  @Input() product: ToyData;
  @Input() isLoading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
