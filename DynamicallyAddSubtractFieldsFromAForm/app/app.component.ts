import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

//this plunk was derived from this tutorial https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2

@Component({
  selector: 'app',
  template: `<h4>Demo How to dynamically add and subtract fields from a form (formgroup) </h4>
  
              <h4>Add customer</h4>
              <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm)">
              <div >
                <label>Name</label>
                  <input type="text" class="form-control" formControlName="name"><br>
                  <small *ngIf="!myForm.controls.name.valid" >
                      Name is required (minimum 5 characters). 
                  </small>
              </div>
              <br>
              <br>            
              
              <!--addresses-->
              <div formArrayName="addresses"> 
                <div *ngFor="let address of myForm.controls.addresses.controls; let i=index" class="panel panel-default">
                  
                  <div>
                    <span>Address {{i + 1}}</span>
                    <a  *ngIf="myForm.controls.addresses.controls.length > 1" (click)="removeAddress(i)">Delete</a>
                  </div>
                  
                  <div [formGroupName]="i">
                    <address [group]="myForm.controls.addresses.controls[i]"></address>
                  </div>
                  
                </div>
              </div>
              <br>
              <br>            

              <div>
                <button  (click)="addAddress()" >Add address</button> 
                <button type="submit"  [disabled]="!myForm.valid">Submit</button>
              </div>
              
              </form>
    `
})
export class MyApp implements OnInit {
    
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
       this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]], 
            addresses: this._fb.array([])
        });
        
        // add address
        this.addAddress();        
  
    }
    
    
     initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        const addrCtrl = this.initAddress();
        
        control.push(addrCtrl);
        
        /* subscribe to individual address value changes */
         addrCtrl.valueChanges.subscribe(x => {
           console.log("values changed to " + x.street + " : " + x.postcode);
         })
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        console.log(model);
    }
    
    
}