import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class PeliculasService {

  apiKey:string = 'c5cc19e42e24813d2fb8a01d2f1889b0'
  url:string = 'https://api.themoviedb.org/3'

  constructor(private jsonp:Jsonp) { }

  obtenerPopulares(){
    let url = this.url +'/discover/movie?sort_by=popularity.desc&api_key='+this.apiKey+'&language=es&callback=JSONP_CALLBACK'
    return this.jsonp.get(url)
      .map(data => data.json())
  }

  obtenerNuevas(){
    let url = this.url + '/discover/movie?primary_release_year=2017&api_key='+this.apiKey+'&language=es&callback=JSONP_CALLBACK'
    return this.jsonp.get(url)
      .map(data => data.json())
  }

  obtenerKids(){
    let url = this.url + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key='+this.apiKey+'&language=es&callback=JSONP_CALLBACK'
    return this.jsonp.get(url)
      .map(data => data.json())
  }

  obtenerPelicula(id:string){
    // /movie/8587?api_key=c5cc19e42e24813d2fb8a01d2f1889b0&external_source=imdb_id
    let url = this.url + '/movie/'+id+'?api_key='+this.apiKey+'&language=es&callback=JSONP_CALLBACK'
    return this.jsonp.get(url)
      .map(data => data.json())
  }

  buscar(query:string){
    let url = this.url + '/search/movie?api_key='+ this.apiKey +'&query='+ query +'&callback=JSONP_CALLBACK'
    return this.jsonp.get(url)
      .map(data => data.json())
  }

}
