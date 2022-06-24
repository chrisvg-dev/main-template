import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/config/services/Auth.service';
import { TokenService } from 'src/app/config/services/token.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder, 
    private auth: AuthService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  public login(): void {
    const data = this.registerForm.value;
    const body = new HttpParams()
    .set('username', data.email)
    .set('password', data.password)
    .set('grant_type', 'password');

    console.log(body.toString());

    this.auth.login(body.toString()).subscribe(
      {
        next: resp => {
          let token = resp;
          sessionStorage.setItem('access_token', token.access_token);
          sessionStorage.setItem('name', token.name);
          sessionStorage.setItem('lastName', token.lastName);

          this.tokenService.setToken( token.access_token );
          this.router.navigate(['/dashboard']);
        },
        error: err => this.toastr.error(err.error.error_description, 'Error code ' + err.status) ,
        complete: () => console.log('Sucecss')
      }
    );
  }

  public initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      grant_type: ['']
    });
  }
}
