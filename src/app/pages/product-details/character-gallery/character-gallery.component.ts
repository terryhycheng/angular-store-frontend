import { Component, Input, OnInit } from '@angular/core';
import { ToyData } from 'src/app/services/models/toys.model';

@Component({
  selector: 'app-character-gallery',
  templateUrl: './character-gallery.component.html',
  styleUrls: ['./character-gallery.component.scss'],
})
export class CharacterGalleryComponent implements OnInit {
  @Input() product: ToyData;

  modalImageUrl: string = '';
  isModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openModal(id: number) {
    this.modalImageUrl = this.product.images[id].url;
    this.isModal = true;
  }

  closeModal() {
    this.isModal = false;
  }
}
