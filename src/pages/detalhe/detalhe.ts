import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

	dados: any;
	detalhes: any;

  constructor(
  		public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController,
		private toastCtrl: ToastController,
		public authService: AuthServiceProvider) {
		
  	this.dados = navParams.get('dados');
	//console.log(this.dados);
	this.DetalhesCurso();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetalhePage');
  }
  
  DetalhesCurso(){
  	this.authService.detalhes(this.dados.id).then((result) => {
  	
		  this.detalhes = result;
		  //console.log(this.detalhes);
		  
		}, (err) => {
		  this.presentToast(err);
		});
  }
  
  BackHome(){
  	this.navCtrl.pop();
  }
  
  OpenGallery(foto){
	console.log(foto);
  }
  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}

