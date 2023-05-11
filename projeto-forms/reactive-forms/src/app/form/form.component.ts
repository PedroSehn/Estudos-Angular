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

  auto_fill(){
    this.form_data.patchValue({
      email: 'Mahesh@gmail.com', 
      nome: 'male',
    })
  }

  clear_form(){
    this.form_data.reset()
  }

  is_valid(event: any){
    const element_name: any = event.target.name
    const errors = this.form_data.controls[`${element_name}`].errors
    !!errors ? 
    console.log(`erro no preenchimento de ${element_name}`) : 
    console.log(`tudo certo`)
  }
}
