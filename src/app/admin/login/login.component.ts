import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/Auth.service';

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
    private toastr: ToastrService) {

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
        next: resp => console.log(resp),
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
