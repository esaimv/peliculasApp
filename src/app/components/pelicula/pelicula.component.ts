import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { PeliculasService } from '../../providers/peliculas.service'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  id:string = ''
  query:string
  pelicula:any

  constructor(private route:ActivatedRoute,
              private ps:PeliculasService,
              private router:Router) {
    this.route.params
      .subscribe( params => {
        this.query = params.query
        this.id = params.id
        this.ps.obtenerPelicula(this.id)
          .subscribe(data => {
            this.pelicula = data
            console.log(data)
          })
        })
  }

  regresar(){
    if(this.query){
      this.router.navigate(['/search', this.query])
    }else{
      this.router.navigate(['/home'])
    }
  }

  ngOnInit() {
  }

}
