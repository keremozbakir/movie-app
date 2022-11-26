









import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imdbPipe'
})
export class ImdbPipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
     return value.toFixed(1);
  }

}
