import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  populares:Array<any> = []
  populares2:Array<any> = []

  nuevas:Array<any> = []

  kids:Array<any> = []

  band:boolean = true
  bandn:boolean = true
  bandk:boolean = true

  constructor(private ps:PeliculasService,
              private router:Router) {
    this.ps.obtenerPopulares()
      .subscribe(data => {
        this.populares = data.results
        let contador = 0
        for(let i=6; i < (this.populares.length -10); i++){
          this.populares2[contador] = this.populares[i]
          contador ++
        }
        this.band = false
      })
    this.ps.obtenerNuevas()
      .subscribe(data => {
        this.nuevas = data.results
        this.bandn=false
      })
    this.ps.obtenerKids()
      .subscribe(data =>  {
        this.kids = data.results
        this.bandk =false
      })
  }

  movie(id:string){
    this.router.navigate(['/movie', id])
  }

  ngOnInit() {
  }

}
