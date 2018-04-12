import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GeneroPage} from '../genero/genero';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public generoReferencia: any = GeneroPage;
  public dataCurp:any = {cadena:''};
  public genero:any={sexo:''};
  constructor(public navCtrl: NavController) {

  }

  public adivinador(){    
    this.genero.sexo=this.dataCurp.cadena[10]=="H";    
  }
  

}