import { Component } from '@angular/core';
import { ErpserviceService } from '../_services/erpservice.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form: any;
  role: any;

  constructor(
    public http: ErpserviceService,
    public formbuilder: FormBuilder,
    private router: Router
  ) {
    this.myform();
  }
  myform() {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submitForm() {
    const obj = this.form.value;
    this.http.login(obj).subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        this.role = data.rows[0].role_name;

        const login = {
          role: this.role,
          username: data.rows[0].username,
          user_id: data.rows[0].user_id,
        };
        console.log(login);
        localStorage.setItem('loginInfo', JSON.stringify(login));
        this.router.navigateByUrl('home');
      } else {
        console.log(data.Message);
      }
    });
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './login.component.css',
})
export class RegisterComponent {}
