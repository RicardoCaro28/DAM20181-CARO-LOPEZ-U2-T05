import {Component} from '@angular/core';
import {GeneroPage} from '../pages/genero/genero';



@Component({
selector:'my-component',
templateUrl:'foo.html'
})

export class MyComponent{
   
     constructor(public genero: GeneroPage){
    
    }

}