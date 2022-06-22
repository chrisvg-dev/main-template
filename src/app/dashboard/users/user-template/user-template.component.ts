import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {
  public users: any = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.findAll();
  }

  

  public findAll(): void {
    this.auth.findAll().subscribe({
      next: resp => {
        console.log(resp);
        this.users = resp;
      },
      error: err => console.log(err),
      complete: () => console.log('Finished'),
    });
  }

  public eliminarUsuario(event: any) {
    if (confirm('Seguro que deseas borrar el registro?')) {
        this.auth.deleteById(event.userId).subscribe({
          next: resp => {
            alert(resp.message);
          },
          error: err => console.log(err),
          complete: () => this.findAll(),
        });
    }
  }

}
