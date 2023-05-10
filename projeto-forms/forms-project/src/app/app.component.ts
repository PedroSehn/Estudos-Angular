import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms-project';

  constructor(private http: HttpClient){}

  onSubmit(variable: NgForm) {
    console.log(variable.value)
  }

  consultCEP(form:any){
    if (form.value.CEP.length > 0) {
      let clean_cep = form.value.CEP.replace(/\D/g, '')
      this.http.get<any>(`https://viacep.com.br/ws/${clean_cep}/json/`)
      .subscribe((data) => this.setValues(form, data))
    }
  }

  setValues(form: any, data: any){
    form.setValue({
      Bairro: data.bairro,
      CEP: data.cep,
      Rua: data.logradouro,
      email: form.value.email,
      nome: form.value.nome,
      senha: form.value.senha,
  })
  }
}
