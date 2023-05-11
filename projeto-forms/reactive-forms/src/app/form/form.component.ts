import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form_data!: FormGroup;

  constructor( private fbuilder: FormBuilder){}

  ngOnInit(){
    this.form_data = this.fbuilder.group({
      nome: [null],
      email: [null],
    });
  }
  

  show_data(){
    console.log(this.form_data.value)
  }

  clear_form(){
    this.form_data.reset()
  }
}
