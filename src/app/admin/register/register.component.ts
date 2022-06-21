import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private auth: AuthService) {}

  public register(): void {
    const data = {
        "name": "ESMERALDA",
        "lastName": "GARCIA",
        "email": "mi.madre@gmail.com",
        "password": "Pa28d8896f9123",
        "rol": ["reader", "writer", "iam"]
    };

    this.auth.register(data).subscribe(
      {
        next: resp => console.log(resp),
        error: err => console.log(err) ,
        complete: () => console.log('Sucecss')
      }
    );
  }

}
