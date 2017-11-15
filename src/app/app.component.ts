import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  texto:string

  constructor(private router:Router){

  }

  buscar(){
    this.router.navigate(['/search', this.texto])
  }

 }
