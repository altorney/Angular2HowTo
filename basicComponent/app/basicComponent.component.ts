import { Component } from '@angular/core'

@Component({
  selector: 'basicComponent'
  template: '<b>{{msg}}</b>'
})

export class basicComponent{
  
  msg: string;
  
  constructor (){
    this.msg = 'Hello basic component'; 
  }
  
  
}