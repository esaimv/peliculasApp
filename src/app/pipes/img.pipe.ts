import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(pelicula: any): any {
    let imgUrl:string = 'https://image.tmdb.org/t/p/w500/'
    if(pelicula){
      if(pelicula.backdrop_path){
        return imgUrl + pelicula.backdrop_path
      }else{
        if(pelicula.poster_path){
          return imgUrl + pelicula.poster_path
        }else{
          return 'assets/noimage.jpg'
        }
      }
    }
  }

}
