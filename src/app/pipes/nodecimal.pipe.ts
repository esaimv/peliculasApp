import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nodecimal'
})
export class NodecimalPipe implements PipeTransform {

  transform(value: any): any {
    return Math.round(value);
  }

}
