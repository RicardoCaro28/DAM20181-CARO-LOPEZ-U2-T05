import {Component} from '@angular/core';
import {GeneroPage} from '../pages/genero/genero';



@Component({
selector:'my-component-dos',
templateUrl:'foodos.html'
})

export class MyComponentDos{
   
     constructor(public genero: GeneroPage){
    
    }

}