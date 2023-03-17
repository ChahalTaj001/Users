import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  items: { name: string, age: number} [] = []
  
  
   
  ngOnInit ( ) {
    
    const items = [
      {name: 'Tajinder', age: 28},
      {name: 'Sukhveer', age : 27},
      {name: 'Amandeep', age: 28},
      {name: 'Gagandeep', age: 20}
    ]
    items.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
    })
    console.log(items);
    }
    
   
  }
