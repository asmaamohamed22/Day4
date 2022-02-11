import { Router } from '@angular/router';
import { IUser } from './../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:IUser = {username:"",password:""}
  
  constructor(private route: Router) {
     
   }

  ngOnInit(): void {
  }
  onsubmit() {
    this.route.navigate(["favourite"])
  }

}
