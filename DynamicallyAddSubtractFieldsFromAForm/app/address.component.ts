import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
//    moduleId: module.id,
    selector: 'address',
    template: `
                <div [formGroup]="adressForm">
                  <div >
                      <label>street</label>
                      <input type="text"  formControlName="street"><br>
                      <small [hidden]="adressForm.controls.street.valid" class="text-danger">Street is required</small>
                  </div>
                  <div>
                      <label>postcode</label>
                      <input type="text" formControlName="postcode">
                  </div>
              </div><br>
    
    `
})
export class AddressComponent {
    @Input('group') 
    public adressForm: FormGroup;
}