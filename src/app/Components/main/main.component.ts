import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    private userService: AuthService,
    private router: Router
  ) { }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login-register']);
      })
      .catch(error => console.log(error));
  }

}
