import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h4>Demo of how to use the ngClass directive</h4>
            <p>
              There are 3 ways to use ngClass
            </p>
            <p>
              1. Bind the <span ngClass='underlined'>string</span> directly to the <span class='txtcolor'>attribute</span>. <br>In this case, we're binding a string directly so we avoid wrapping the directive (ngClass) in square brackets.
            </p>
            <p>
              2. Binding an <span [ngClass]="['underlined', 'txtcolor']">Array</span>. <br>Here, since we are binding to the ngClass directive by using an expression, we need to wrap the directive name in square brackets.
            </p>
            <p>
              3. Binding an <span [ngClass]="{underlined: true, txtcolor:showColor}">Object</span>.
              <button type="button" (click)="showColor=!showColor">Toggle text colour</button>
              <br>Here, since we are binding to the ngClass directive by using an expression, we need to wrap the directive name in square brackets.
            </p>
            `,
  styles:   [`.underlined {
              border-bottom: 1px solid #ccc;
            }
            .txtcolor {
              color: orange;
            }
            `]            
})
export class MyApp {
   showColor: boolean = true;
}