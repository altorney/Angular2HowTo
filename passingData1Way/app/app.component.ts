import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h4>Demo for passing data to a component</h4>
              To bind to a raw string<BR>
              <hello name=' World'></hello><BR>
              To bind to a variable that is defined in the parent scope<BR>
              <hello [name]='helloName'></hello><BR>
              Note that the [name] in the hello tag &lt; hello [name]='helloName'&gt;&lt;/hello&gt; means that you are<BR>
              passing an expression and Ng will be looking for a variable name`
})

export class MyApp {
  
  helloName: string;
  
  constructor(){
    this.helloName = "Other World"
  }
}