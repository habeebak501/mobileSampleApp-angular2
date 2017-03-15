import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'onlyKeys'
})
export class OnlyKeysPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value)
    let keys = [];
    for( let key in value ){
      keys.push(key);
    }
    console.log(keys)
    return keys;
  }
}
