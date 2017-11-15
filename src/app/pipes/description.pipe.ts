import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any): any {
    if(value.length < 270){
      return value
    }else{

      return value.slice(0, 280)  + '...'
    }
  }

}
