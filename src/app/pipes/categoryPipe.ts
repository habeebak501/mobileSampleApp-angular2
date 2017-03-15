import {Pipe, PipeTransform} from '@angular/core';
import {OnlyKeysPipe} from './only-keys.pipe';

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {
  filterByArray = [];

  public filter(filterby, data) {
    let prod = [];
    let count;
    let products = data;
    for (let i in filterby) {
      count = 0;
      for (let j in filterby[i]) {
        if (count > 0) {
          data.forEach(function (element) {
            if (filterby[i][j] == element.specs[i])
              prod.push(element);
          });
        }
        else {
          products.forEach(function (element) {
            if (filterby[i][j] == element.specs[i])
              prod.push(element);
          });
        }
        products = prod;
        count++;
      }
      prod = [];
    }
    return products;
  }
  transform(products: any[], args: string): any {

    let filterby = JSON.parse(args);
     console.log(filterby)
    let prod = [];
    let keys = new OnlyKeysPipe().transform(filterby);
    console.log(keys)
    if (typeof products == 'object' && !null) {
      for (let key in keys){
        let i = keys[key];
        console.log(i)
        if (filterby[i].length != 0)
          this.filterByArray[key] = i;
            console.log(i)
      }
      if(filterby != null) {
        prod = this.filter(filterby, products);
        console.log(prod)
        return prod;
      }
       else {
        prod = products;
        return prod;
      }
    }

    return prod;
  }
}
