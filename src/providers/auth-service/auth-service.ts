import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost/teste_ezoom/cursos/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {}

  listar() {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

        this.http.post(apiUrl+'listar', {}, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  detalhes(id){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

        this.http.post(apiUrl+'detalhes/'+id, {}, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

}