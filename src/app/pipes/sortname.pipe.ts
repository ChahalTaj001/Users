import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {

  transform(list : any[], column:string): any[] {
    let sortedArray = list.sort((a,b)=>{
      if(a[column] > b[column]){
        return 1;
      }
      if(a[column] < b[column]){
        return -1;
      }
      return 0;
    });
    return sortedArray;
  }

}
