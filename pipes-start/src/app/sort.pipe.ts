import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, type: string): any {
    return value.sort((a, b) => {
      if(a[type] > b[type]){
        return 1;
      }else{
        return -1;
      }
    });
  }

}
