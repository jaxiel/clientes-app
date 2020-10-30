import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

// Por ClienteService
// import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(private clientesService:ClienteService) { }

  ngOnInit(): void {
  //  this.clientes=CLIENTES;
    // this.clientes = this.clientesService.getClientes();
    this.clientesService.getClientes().subscribe(
  clientes=>this.clientes=clientes
      // Parentesis  cuanto tiene mas de un
      // argumento/parametro
      // Llaves cuando es mas de una linia de codigo
      // (clientes)=>{
      //   this.clientes=clientes
      // }
    );
  }

}
