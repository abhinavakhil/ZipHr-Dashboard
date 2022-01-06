import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit:number): any {
    if (value.length <= limit) {
      return value;
    }
    return value.slice(0,limit) + '...';
  }
}
