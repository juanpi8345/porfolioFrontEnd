import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent {

  constructor(private dataPorfolio:ServiceService){}
  data:any;

  ngOnInit(){
    this.dataPorfolio.getData().subscribe(data=>{
      this.data = data;
    })
  }

}
