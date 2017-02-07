import { BrowserModule }  from '@angular/platform-browser';  
import { NgModule } '@angular/core';
import { MyApp } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent }   from './address.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [MyApp, AddressComponent ],
  bootstrap: [MyApp]
})
export class MyAppModule {
   
}
