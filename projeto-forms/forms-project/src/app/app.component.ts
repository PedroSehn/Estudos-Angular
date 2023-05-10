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
    console.log(variable)
  }

  consultCEP(cep:string){
    let clean_cep = cep.replace(/\D/g, '')
    this.http.get<any>(`https://viacep.com.br/ws/${clean_cep}/json/`)
      .subscribe((data) => console.log(data))
  }
}
