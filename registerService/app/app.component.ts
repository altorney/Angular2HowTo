import { Component } from '@angular/core';
import { Hello } from './hello.service';

@Component({
  selector: 'app',
  template: '<b>{{greeting}} </b>'
})
export class MyApp {
  
  constructor(hello: Hello){
    this.greeting = hello.greeting;
    
  }
  
}