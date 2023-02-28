import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from 'src/app/services/porfolio.service';
import { ProyectosComponent } from '../proyectos/proyectos.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  
 
  constructor(private dataPorfolio: ServiceService, private rutaActiva: ActivatedRoute){}


  proyecto:any;
  ruta: number = 0;
  id:number = 0;

  ngOnInit() {

    this.dataPorfolio.getData().subscribe(data=>{

      this.rutaActiva.params.subscribe((params: Params) => {
        this.ruta = params['ruta'].toString();
        this.id = params['id'].toString();   
      });
      this.proyecto = data.proyectos[this.ruta][this.id-1];
      console.log(data.proyectos[2][0])

    })
  

    
  }

 
}
