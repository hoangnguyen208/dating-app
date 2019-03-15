import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe(() => {
      this.alertifyService.success('Registration successful');
    }, err => {
      console.error(err);
      this.alertifyService.error(err);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
