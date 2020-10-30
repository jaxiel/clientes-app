import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';

  //Tipado
  // curso='Curso Spring 5 con Angular 7';
  // Forma Estatica
  /*; buena practica apostrofo en vez de "" buena practica*/
  curso: string ='Curso Spring 5 con Angular 7';

  profesor: string = 'Jaziel Vazquez';


}
