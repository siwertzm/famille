import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'famille';

  user: any;

  constructor(private Http: HttpClient, public authService: AuthService){

  }

  ngOnInit(){
    this.getUser();

  }

  getUser(){
    this.Http.get('http://localhost:8289/user').subscribe({
      next: (data)=> {this.user = data},
      error: (err)=> {console.log(err)}
    })
  }

}


