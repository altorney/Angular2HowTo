import { BrowserModule }  from '@angular/platform-browser';  
import { NgModule } '@angular/core';
import { MyApp } from './app.component'
import { basicComponent } from './basicComponent.component.ts';

@NgModule({
  imports: [BrowserModule],
  declarations: [MyApp,
                 basicComponent],
  bootstrap: [MyApp]
})
export class MyAppModule {
  
}
