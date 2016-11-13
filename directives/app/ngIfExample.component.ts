import { Component } from '@angular/core';

@Component({
  selector: 'ngIfExample',
  template: `1. ngIf
            <button type="button" (click)="exists=!exists">Toggle Component</button>
            <span *ngIf="exists">
              Hello
            </span>
            <p>The ngIf directive conditionally adds or removes content from the DOM based on whether or not an expression is true or false. 
            This can be an issue with components that have expensive create/destroy actions. Eg a component with a large child subtree or one that makes several HTTP calls when constructed.</p>
            `
})
export class NgIfExample {
   exists: boolean = true;
}