import { Component } from '@angular/core';

@Component({
  selector: 'comboExample',
  template: `4. Combination of directives<br><br>
  
              <template ngFor [ngForOf]=numbers let-item>
                <div *ngIf="item > 3">
                  <blockquote>Number: {{item}}</blockquote>
                </div>
              </template>      
              <br><br>  
              Sometimes we'll want to combine multiple structural directives together, like iterating using ngFor but wanting to do an ngIf to make sure that the value matches some or multiple conditions. Combining structural directives can lead to unexpected results however, so Angular 2 requires that a template can only be bound to one directive at a time. To apply multiple directives we'll have to expand the sugared syntax or nest template tags.
            `
})
export class ComboExample {
  numbers: number[] = [1,2,3,4,5,6];
}