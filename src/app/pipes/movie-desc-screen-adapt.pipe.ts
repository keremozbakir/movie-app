import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDescScreenAdapt'
})
export class MovieDescScreenAdaptPipe implements PipeTransform {

  transform(value: string, innerWidth:number): any {
    if (innerWidth < 821 ) {
      return value.slice(0,280)+"..."
    } else {
      return value
    }
  }

}
