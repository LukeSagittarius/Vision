import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "app/admin/user";
import { UserService } from "app/admin/user.service";
import { NgForm, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-book-overview',
  templateUrl: './admin-user-list.component.html'
})

export class AdminUserListComponent implements OnInit {
  @ViewChild('userDeleteForm') currentForm: NgForm;

  users: User[];

  constructor(private userService: UserService) {

  }

  delete(): void {
    this.userService.delete(this.currentForm.form.get('id').value);
    window.location.reload();
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(
      users => this.users = users
    );
  }

  thereAreUsersToDisplay(): boolean {
    return this.users && this.users.length > 0;
  }

}
