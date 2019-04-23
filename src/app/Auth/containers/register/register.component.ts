import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

// interface
import { User } from '../../models/user.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(
    private auth: AuthService,
  ) { }

  register(event) {
    this.error = null;
    const { email, password } = event.value;
    this.auth.register(email, password)
      .catch ( error => {
        this.error = error.message;
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
