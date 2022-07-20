import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  bannerImagePath: string =
    '../../../../assets/images/hottoys_main_banner.jpeg';

  constructor() {}

  ngOnInit(): void {}
}
