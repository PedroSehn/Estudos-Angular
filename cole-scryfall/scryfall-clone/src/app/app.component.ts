import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetCardsService } from './services/get-cards/get-cards.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{
  url: string = 'https://api.scryfall.com/cards/search?q=c%3Ablack ';
  cards_data: Array<Object> = []
  loading: boolean = true
  constructor(private service: GetCardsService){}

  ngOnInit(): void {
    this.service.getCards(this.url).subscribe(data => {
      this.cards_data = data.data
      console.log(data)
      this.loading = false

    });
  }
}
