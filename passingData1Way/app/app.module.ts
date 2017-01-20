import { BrowserModule }  from '@angular/platform-browser';  
import { NgModule } '@angular/core';
import { MyApp } from './app.component';
import { Hello } from './hello.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ MyApp
                  Hello],
  bootstrap: [MyApp]
})
export class MyAppModule {
  
}
