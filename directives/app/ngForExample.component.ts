import { Component } from '@angular/core';

@Component({
  selector: 'ngForExample',
  template: `2. ngFor
              <ol >
                <li *ngFor="let episode of episodes">
                  {{episode.title}}: {{episode.director}}
                </li>
              </ol>            
              ngFor also provides some other values that can be bound to:
                <ol>
                <li>index - position of the current item in the iterable starting at 0</li>
                <li>first - true if the current item is the first item in the iterable</li>
                <li>last - true if the current item is the last item in the iterable</li>
                <li>even - true if the current index is an even number</li>
                <li>odd - true if the current index is an odd number</li>
                </ol>
               <ol >
                <li *ngFor="let episode of episodes;  let i = index; let isOdd = odd">
                  {{episode.title}}: {{episode.director}} - index = {{i}} - odd = {{isOdd}}
                </li>
              </ol>   
                
                
              TODO Trackby<br><br>  
              
            `
})
export class NgForExample {
  episodes: any[] = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' }
   
  ];
}