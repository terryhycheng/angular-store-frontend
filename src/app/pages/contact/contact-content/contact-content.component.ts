import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/services/models/store-data.model';
import { StoreLocationsService } from 'src/app/services/store-locations.service';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.scss'],
})
export class ContactContentComponent implements OnInit {
  isLoading: boolean = false;
  storeData: StoreData[];

  constructor(private storeLocationsService: StoreLocationsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.storeLocationsService.getStore().subscribe((data) => {
      this.storeData = data;
      this.isLoading = false;
    });
  }
}
