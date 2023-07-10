import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [
    { name: 'User 1', isAdmin: false },
    { name: 'User 2', isAdmin: true },
    { name: 'User 3', isAdmin: false },
    { name: 'User 4', isAdmin: false },
    { name: 'User 5', isAdmin: false },
    { name: 'User 6', isAdmin: false },
    { name: 'User 7', isAdmin: false },
    { name: 'User 8', isAdmin: false },
    { name: 'User 9', isAdmin: false },
    { name: 'User 10', isAdmin: false },
    { name: 'User 11', isAdmin: false },
    { name: 'User 12', isAdmin: false },
    { name: 'User 13', isAdmin: false },
    { name: 'User 14', isAdmin: false },
    { name: 'User 15', isAdmin: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  makeAdmin(user: User) {
    user.isAdmin = true;
  }
}
