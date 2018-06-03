import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "app/admin/user.service";
import { UserStatusService } from "app/admin/user-status.service";
import { UserStatus } from "app/admin/user-status";
import { User } from "app/admin/user";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserState } from "app/admin/user-state";
import { UserStateService } from "app/admin/user-state.service";
import { NgForm, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-book-overview',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.scss']
})

export class AdminUserEditComponent {
  @ViewChild('userEditForm') currentForm: NgForm;

  statuses: UserStatus[];
  states: UserState[];
  user: User;
  submitted: boolean;

  constructor(private userStatusService: UserStatusService, private userStateService: UserStateService, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
    this.submitted = false;
  }

  private static createErrorMessage(errorObject: { [key: string]: any }): string {
    if (errorObject) {
      for (let errorCode in errorObject) {
        if (errorObject.hasOwnProperty(errorCode)) {
          switch (errorCode) {
            case 'required':
              return 'Please provide a value';
            case 'maxlength':
              return 'The value is too long';
            default:
              return 'The value is wrong';
          }
        }
      }
    }
  };

  getErrorMessageOfField(fieldName: string): string {
    if (this.isFieldInvalid(fieldName)) {
      const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
      return AdminUserEditComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  save(): void {
    this.submitted = true;
    if (this.currentForm.valid) {
      this.userService.edit(this.user);
      this.router.navigate(['/admin/userList']);
      window.location.reload();
    }
  }

  ngOnInit(): void {
    this.userStatusService.findAll().subscribe(
      statuses => this.statuses = statuses
    );
    this.userStateService.findAll().subscribe(
      states => this.states = states
    );
    this.route.params.forEach((params: Params) => {
      if (params['userId']) {
        let userId: number = +params['userId'];
        let foundBook: User = this.userService.findOne(userId);
        if (foundBook) {
          this.user = foundBook;
        } else {
          this.router.navigate(['/admin/userList']);
        }
      }
    });

  }

}
