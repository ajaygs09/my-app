import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: any;

  constructor(
    public fb: FormBuilder,
    public route:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }
  submit() {
    if (this.loginForm.invalid) {
      return;
    }
this.route.navigate(['/dashboard']);
  }
}



