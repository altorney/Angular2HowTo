import { BrowserModule }  from '@angular/platform-browser';  
import { NgModule } '@angular/core';
import { MyApp } from './app.component';
import { NgIfExample } from './ngIfExample.component';
import { NgForExample } from './ngForExample.component';
import { NgSwitchExample } from './ngSwitchExample.component';
import { ComboExample } from './ComboExample.component';




@NgModule({
  imports: [BrowserModule],
  declarations: [MyApp, 
                NgIfExample, 
                NgForExample,
                NgSwitchExample,
                ComboExample],
  bootstrap: [MyApp]
})
export class MyAppModule {
  
}
