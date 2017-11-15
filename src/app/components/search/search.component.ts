import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  texto:string = ''
  resultados:Array<any> = []
  cargando:boolean = true

  constructor(private ps:PeliculasService,
              private router:Router,
              private route:ActivatedRoute) {
    this.route.params
      .subscribe(params => {
        if(params.query){
          this.texto = params.query
          this.buscar()
        }
      })
  }

  buscar(){
    if(this.texto.length > 1){
      let query = this.texto.replace(/ /g, '+')
      this.ps.buscar(query)
        .subscribe(data => {
          this.resultados = data.results
          this.cargando = false
        })
    }
  }

  movie(id:string){
    this.router.navigate(['/movie', id, this.texto])
  }

  ngOnInit() {
  }

}
