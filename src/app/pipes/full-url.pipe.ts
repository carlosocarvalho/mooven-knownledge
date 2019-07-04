import { environment } from './../../environments/environment';
import { Pipe, PipeTransform, Inject } from '@angular/core';
//import { Location, DOCUMENT } from '@angular/common';

@Pipe({
  name: 'fullurl'
})
export class FullUrlPipe implements PipeTransform {


  transform(value: any): any {
    return `${location.origin}/${value}`;
  }

}
