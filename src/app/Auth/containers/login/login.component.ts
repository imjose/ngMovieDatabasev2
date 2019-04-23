import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

// interface
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
  ) { }

  error: string;

  updateUserData(user) {
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };
  }

  login(event) {
    const { email, password } = event.value;
    this.auth.login(email, password)
      .catch ( error => {
        this.error = error.message;
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
