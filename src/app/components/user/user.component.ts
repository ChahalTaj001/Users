import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm :FormGroup;
  listData:any[]=[];
  isAscendingSort: boolean = false;
  index:number
 
   constructor( private formbuilder: FormBuilder) {
  
    
     
    this.listData = [
      {firstName:'John', middleName:'Paul', lastName:'Smith', email:'john@gmail.com', dob:'01-02-1990'},
      {firstName:'Mark', middleName:'Whone', lastName:'Anderson', email:'aderson@gmail.com', dob:'05-02-1985'},
      {firstName:'Dominic', middleName:'Marsh', lastName:'Torreto', email:'dominic@gmail.com', dob:'15-06-984'},
      {firstName:'Danniel', middleName:'Penny', lastName:'Brown', email:'dennial@gmail.com', dob:'05-08-1988'},
      {firstName:'Donald', middleName:'Harold', lastName:'Cooper', email:'cooper@gmail.com', dob:'20-11-1980'}
    ]

    this.userForm = this.formbuilder.group ({
      firstName:['',Validators.required],
      middleName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      dob:['',Validators.required],
      password:['',[Validators.required, this.noSpaceAllowed]]
    })
   }
  ngOnInit(): void {
  }
   addUser(){
    if(this.userForm.valid){
      this.listData.push(this.userForm.value);
      this.userForm.reset();
    }else {
      this.validateAllFormFields(this.userForm);
      alert("Your Form is invalid")
    }
     
  }

  private validateAllFormFields(formGroup: FormGroup){
    console.log('value',Object.keys(formGroup.controls))
    console.log('value2',formGroup.controls)

  Object.keys(formGroup.controls).forEach(field =>{
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsDirty({onlySelf: true});
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control)
    }
  })
  }

   onRemove(user:any){
    this.listData.forEach((value: any,index: any)=>{
      console.log('value', value)
      if(value == user)
      this.listData.splice(index,1);
      
    })
   }
   noSpaceAllowed(control: FormControl){
    if(control.value != null && control.value.indexOf(' ')!= -1){
      return {noSpaceAllowed: true}
    }
    return null;
   }

   onSort(){
   this.listData.sort((a, b) => {
    var nameA = a.firstName
    var nameB = b.firstName
    if (nameA < nameB){
      return -1;
    }
    if (nameA > nameB){
      return 1;
    }
    return 0;
   })
   }
    
   moveUp(user:any, index:any){
   if (index > 0) {
    const tmp = this.listData[index -1];
    this.listData[index -1] = this.listData[index];
    this.listData[index] = tmp;
   }
   }

   moveDown(user:any, index:any){
    if (index < this.listData.length) {
      const tmp = this.listData[index +1];
      this.listData[index +1] = this.listData[index];
      this.listData[index] = tmp;
    }
   }
  
} 

