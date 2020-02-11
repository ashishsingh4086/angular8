import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetArgs : string): any {
    if(!value) {
      return ""
    }

    const defaultValue: number = value * 1.609

    switch(targetArgs) {
      case 'km':
       return defaultValue
      case 'm':
      return defaultValue * 1000
      default:
      return defaultValue
    }
  
  }

}
