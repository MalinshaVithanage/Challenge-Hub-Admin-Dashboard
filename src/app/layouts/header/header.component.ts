import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
userEmail: string = '';
isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn();

constructor(private authService: AuthService) {}

ngOnInit() {
  this.userEmail = JSON.parse(localStorage.getItem('user') || '{}').email || '';
  this.authService.isLoggedIn();
}
onLogOut() {
  this.authService.logout();
}
}
