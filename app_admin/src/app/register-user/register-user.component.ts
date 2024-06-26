import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public formError: string = '';
  
  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() { }

  public onRegisterSubmit(): void {
    this.formError = '';
    if (!this.credentials.name || this.credentials.email || !this.credentials.password) {
    this.formError = 'All fields are required, please try again';
    } else {
      this.doRegister();
    }
  }

  private doRegister(): void {
    this.authenticationService.register(this.credentials)
      .then(() => this.router.navigateByUrl('#'))
      .catch((message) => this.formError = message);
  }
}
