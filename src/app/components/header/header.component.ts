import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data:any;

  constructor(private porfolioData:ServiceService){}

  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data =>{
      this.data = data;
    })
  }

  

 

}
