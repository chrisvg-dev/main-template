import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/Auth.service';
import { RolServiceService } from 'src/app/services/rol-service.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public roles: any = [];

  @Output() emitter = new EventEmitter();

  constructor(
    private readonly fb: FormBuilder, 
    private auth: AuthService,
    private rolService: RolServiceService,
    private toastr: ToastrService
    ) {
      this.registerForm = this.initForm(); 
  }

  ngOnInit(): void {
    this.findAll();
  }

  public emitirEvento() {
    this.emitter.emit({ 
      update: true
    });
  }

  public register(): void {
    const data = this.registerForm.value;
    console.log(data);
    this.auth.register(data).subscribe({
      next: resp => {
        if (resp.status === 'CREATED') {
          this.toastr.success('User created', 'Success message');
        }
      },
      error: err => {
        console.log(err);
        this.toastr.error(err.error.message, `Error code ${err.status}`);
      },
      complete: () => {
        console.log('Finished');
        this.emitirEvento();
      }
    });
  }

  public findAll(): void {
    this.rolService.findAll().subscribe({
      next: resp => {
        console.log(resp);
        this.roles = resp;
      },
      error: err => console.log(err),
      complete: () => console.log('Finished'),
    });
  }

  public initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      rol: new FormArray([], Validators.required)
    });
  }

  onCheckboxChange(event: any) {
    const selectedRoles = (this.registerForm.controls['rol'] as FormArray);
    if (event.target.checked) {
      selectedRoles.push(new FormControl(event.target.value));
    } else {
      const index = selectedRoles.controls
      .findIndex(x => x.value === event.target.value);
      selectedRoles.removeAt(index);
    }
  }
}
