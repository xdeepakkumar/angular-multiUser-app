import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  }

  constructor(private snackBar: MatSnackBar, private _userService: UserService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.user.email == '' || this.user.username == '' || this.user.phone == '' || this.user.password == '' || this.user.firstName == '' || this.user.lastName == ''){
      this.snackBar.open('all fields are required', 'ok', {
        duration: 3000,
        verticalPosition: 'top'
      })
      return;
    }
    //adding user
    this._userService.addUser(this.user).subscribe(
      (res)=> {
       Swal.fire('Success', 'You are registered successfully.', 'success');
      },
      (err)=> {
        console.log(err);
        this.user.username=''
        this.snackBar.open('username exist! Please try another username.', 'ok', {
          duration: 3000,
          verticalPosition: 'top'
        })
      }
    );
  }
}
