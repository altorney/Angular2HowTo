import { Component } from '@angular/core';

@Component({
  selector: 'ngSwitchExample',
  template: `3. ngSwitch<br><br> 
            <button type="button" (click)="switch==1?switch=2:switch=1">Toggle Component</button>
            
            <div [ngSwitch]="switch">
              <span *ngSwitchCase="1">Hello</span>
              <span *ngSwitchCase="2">Hello again</span>
            </div>
            

            <p>The ngSwitch directive conditionally adds or removes content from the DOM based on whether or not an expression is true or false. 
            This can be an issue with components that have expensive create/destroy actions. Eg a component with a large child subtree or one that makes several HTTP calls when constructed.</p>
            `
})
export class NgSwitchExample {
  switch:number = 1;
}

