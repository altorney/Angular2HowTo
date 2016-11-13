import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h4>Demo of Directives</h4>
            <ngIfExample></ngIfExample>
            <ngForExample></ngForExample>
            <ngSwitchExample></ngSwitchExample>
            <comboExample></comboExample>
            
  `
})
export class MyApp {
  
}