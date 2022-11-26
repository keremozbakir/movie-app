import { KeyValuePipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descSlice'
})
export class DescSlicePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    if (value.length > 300) {
      return value.slice(0,300)+"..."
    }
    return value
  }

}
