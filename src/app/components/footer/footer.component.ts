import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  logoImagePath: string = '../../../assets/images/hottoys_logo.png';
  githubImagePath: string = '../../../assets/images/terryhycheng.png';

  githubLink: string = 'https://github.com/terryhycheng';
  twitterLink: string = 'https://twitter.com/';

  constructor() {}

  ngOnInit(): void {}
}
