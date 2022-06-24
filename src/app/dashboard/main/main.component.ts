import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/config/services/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.toastr.info('Session cerrada exitosamente', 'Log Out');
    this.tokenService.logOut();
  }

}
