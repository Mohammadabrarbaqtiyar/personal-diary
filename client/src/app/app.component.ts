import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
      
  }

  title = 'personal-diary-FE';

  

  signInWithGoogle(){
    this.authService.signInWithGoogle().subscribe(res=>{
      console.log(res);
      
    }, err=>{
      console.log(err);
      
    })
  }
}
