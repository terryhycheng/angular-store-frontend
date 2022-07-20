import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
