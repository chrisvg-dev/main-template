import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private auth: AuthService) {

  }
  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  public register(): void {
    const data = this.registerForm.value;
    this.auth.register(data).subscribe(
      {
        next: resp => console.log(resp),
        error: err => console.log(err) ,
        complete: () => console.log('Sucecss')
      }
    );
  }

  public initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

}
