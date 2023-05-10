import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-cards-parent',
  templateUrl: './card.parent.component.html',
  styleUrls: ['./card.parent.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    cards: {{ cards }}
  `
})

export class CardsParentComponent implements OnInit{
  @Input() cards: any
  
  ngOnInit(): void {
    console.log(this.cards)
  }

}
