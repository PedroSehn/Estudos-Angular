import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardsParentComponent } from './cards-parent/cards.parent.component';
import { GetCardsService } from './services/get-cards/get-cards.service';
import { CardComponent } from './card/card.component';
import { FilterFormComponent } from './filter-form/filter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsParentComponent,
    CardComponent,
    FilterFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ GetCardsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
