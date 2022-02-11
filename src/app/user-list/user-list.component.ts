import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: any[] = [];
  constructor(private userService: UserService) { 
    
    
    // console.log( this.userService.getAllUsers())
    this.userService.getAllUsers().subscribe((u) => {this.userList = u});
  }

  ngOnInit(): void {
  }

}
