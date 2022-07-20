import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoImagePath: string = '../../../assets/images/hottoys_logo.png';

  // Links
  facebookLink: string = 'https://www.facebook.com/hottoys';
  weiboLink: string = 'https://weibo.com/hottoyscollectibles';
  qqLink: string = 'https://t.qq.com/hottoyscollectibles';

  constructor() {}

  ngOnInit(): void {}
}
