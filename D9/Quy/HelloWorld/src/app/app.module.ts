import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './components/item/item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatInputModule} from '@angular/material/input';
import { FottersComponent } from './components/fotters/fotters.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NavBarComponent,
    ListItemComponent,
    CarouselComponent,
    FottersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
