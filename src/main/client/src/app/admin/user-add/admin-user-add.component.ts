import { Component, OnInit, ViewChild } from "@angular/core";
import { UserStatus } from "app/admin/user-status";
import { UserStatusService } from "./../user-status.service";
import { User } from "app/admin/user";
import { UserService } from "app/admin/user.service";
import { NgForm, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-overview',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.scss']
})

export class AdminUserAddComponent implements OnInit {
  @ViewChild('userAddForm') currentForm: NgForm;

  statuses: UserStatus[];
  user: User;
  submitted: boolean;

  constructor(private userStatusService: UserStatusService, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = new User;
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
      return AdminUserAddComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  save(): void {
    this.submitted = true;
    if (this.currentForm.valid) {
      this.userService.save(this.user);
      this.router.navigate(['/admin/userList']);
      window.location.reload();
    }
  }

  ngOnInit(): void {
    this.userStatusService.findAll().subscribe(
      statuses => this.statuses = statuses
    );
  }

}
