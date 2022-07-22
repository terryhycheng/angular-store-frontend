import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardListComponent } from './pages/products/card-list/card-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './pages/products/hero-section/hero-section.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { PurchaseDoneComponent } from './pages/purchase-done/purchase-done.component';
import { ErrorComponent } from './pages/error/error.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AboutContentComponent } from './pages/about/about-content/about-content.component';
import { ContactContentComponent } from './pages/contact/contact-content/contact-content.component';
import { CardComponent } from './pages/products/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CharacterMidbannerComponent } from './pages/product-details/character-midbanner/character-midbanner.component';
import { CharacterGalleryComponent } from './pages/product-details/character-gallery/character-gallery.component';
import { ContactCardComponent } from './pages/contact/contact-card/contact-card.component';
import { CartCardComponent } from './pages/cart/cart-card/cart-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    CartComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailsComponent,
    ProductsComponent,
    PurchaseDoneComponent,
    ErrorComponent,
    MenuBarComponent,
    AboutContentComponent,
    ContactContentComponent,
    CardComponent,
    LoaderComponent,
    CharacterMidbannerComponent,
    CharacterGalleryComponent,
    ContactCardComponent,
    CartCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
