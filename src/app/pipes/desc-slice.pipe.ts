import { KeyValuePipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descSlice'
})
export class DescSlicePipe implements PipeTransform {

  transform(value: any, innerWidth:number): unknown {
    if (innerWidth <= 375) {
      return value.slice(0,100)+"..."
    }

    if (value.length > 300) {
      return value.slice(0,300)+"..."
    }
    return value
  }

}
