import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullurl'
})
export class FullUrlPipe implements PipeTransform {

  transform(value: any): any {
    return `${location.origin}/${value}`;
  }

}
