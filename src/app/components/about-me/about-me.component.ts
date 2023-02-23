import { animation } from '@angular/animations';
import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  data:any;
  aboutVisibility:boolean = false;
  formacionVisibility:boolean = false;
  projectVisibility:boolean = false;
  

  constructor(private porfolioData:ServiceService){}

  ngOnInit(): void {
    this.porfolioData.getData().subscribe(data=>{
      this.data = data;

    })
  }

  showAbout(){
    this.aboutVisibility = true;
    this.formacionVisibility = false;
    this.projectVisibility = false;
  }

  showFormacion(){
    this.formacionVisibility = true;
    this.aboutVisibility = false;
    this.projectVisibility = false;
  }

  showProjects(){
    this.projectVisibility = true;
    this.formacionVisibility = false;
    this.aboutVisibility = false;
  }

}
