import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { routes } from 'src/app/shared/routes/routes';
import {subscribeToArray} from "rxjs/internal/util/subscribeToArray";
import {Router} from "@angular/router";
//import {ERROR} from "@angular/compiler-cli/src/ngtsc/logging/src/console_logger";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public passwordClass = false;
  public ERROR = false;
  form = new FormGroup({
    email: new FormControl('admin@dreamguys.in', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(public auth: AuthService, public router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }

  loginFormSubmit() {
    if (this.form.valid) {
      this.ERROR = false;
      this.auth.login(this.form.value.email ? this.form.value.email:'', this.form.value.password ? this.form.value.password:'')
        . subscribe((resp:any)=> {
          console.log(resp);
          if(resp){
            //el login es exitoso
            setTimeout(() =>{
              this.router.navigate([routes.adminDashboard]);
            }, 50);
          }else {
            this.ERROR = true;
          }
        },error =>{
          console.log(error);
      });
    }
  }
  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }

  //protected readonly ERROR = ERROR;
}
