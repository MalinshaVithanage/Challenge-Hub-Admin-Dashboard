import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { CONNREFUSED } from 'dns';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, AngularFireAuthModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
onSubmit(formValue: any) {
    console.log('Form Submitted!', formValue);
}
}
