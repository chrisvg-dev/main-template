import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/config/services/Auth.service';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input('data') users: any = [];
  @Output() emitter = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {}

  public emitirEvento( id: number ) {
    this.emitter.emit({ 
      userId: id
    });
  }
}
