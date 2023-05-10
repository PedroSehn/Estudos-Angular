import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    card: {{ card }}
  `
})
export class CardComponent implements OnInit{
  @Input() card: any
  src:string = ''
  name:string = ''
  two_faces_array = ['transform', 'modal_dfc', 'reversible_card']
  ngOnInit(): void { 
    const is_two_sided = this.two_faces_array.find((item) => item === this.card.layout)
    !!is_two_sided ? this.src = this.card.card_faces[0].image_uris.normal : this.src =  this.card.image_uris.normal
  }
}
