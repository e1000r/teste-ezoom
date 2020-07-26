import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	cursos: any;
	data: any;

  constructor(
  		public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		private toastCtrl: ToastController,
		public authService: AuthServiceProvider){
		
	this.ListarCursos();
  }
  
  ListarCursos(){
  	this.authService.listar().then((result) => {
  	
		  this.cursos = result;
		  this.cursos = this.cursos.data;
		  //console.log(this.cursos);
		  
		}, (err) => {
		  this.presentToast(err);
		});
  }
  
  DetalhesCurso(dados){
    this.navCtrl.push(DetalhePage, {
        dados:dados
    });
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
