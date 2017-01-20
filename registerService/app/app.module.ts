import { BrowserModule }  from '@angular/platform-browser';  
import { NgModule } '@angular/core';
import { MyApp } from './app.component'
import { Hello } from './hello.service'

@NgModule({
  imports: [BrowserModule],
  declarations: [MyApp],
  providers: [Hello],
  bootstrap: [MyApp]
})
export class MyAppModule {
  
}
