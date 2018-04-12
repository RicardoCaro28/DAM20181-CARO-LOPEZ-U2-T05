import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyComponent } from '../../components/foo';
import { MyComponentDos } from '../../components/foodos';
/**
 * Generated class for the GeneroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})
export class GeneroPage {

  public hombre:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroPage');    
    console.log(this.navParams.data.sexo);    
    this.hombre=this.navParams.data.sexo;
  }

  goBack(){
    this.navCtrl.pop();
    }

}
