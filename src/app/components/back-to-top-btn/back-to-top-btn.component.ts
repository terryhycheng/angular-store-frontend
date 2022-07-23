import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top-btn',
  templateUrl: './back-to-top-btn.component.html',
  styleUrls: ['./back-to-top-btn.component.scss'],
})
export class BackToTopBtnComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
