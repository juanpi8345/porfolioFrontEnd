import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/porfolio.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProyectoComponent } from '../proyecto/proyecto.component';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  constructor(private porfolioData: ServiceService, private rutaActiva: ActivatedRoute) { }
  data:any;
  ruta: number = 0;


  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data => {
      this.data = data;

      this.rutaActiva.params.subscribe((params: Params) => {
        this.ruta = params['ruta'].toString();
      });
    });
  }


 


}
