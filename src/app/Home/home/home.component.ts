import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: any;
  name: any;
  lastnamedisplay: any;
  list_Of_Data: any = [];
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(({
      "firstname": new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z ]*$")]),
      "lastname": new FormControl("", [Validators.required, Validators.min(2), Validators.pattern("^[a-zA-Z ]*$")]),
      "mobilenumber": new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("[6-9]\\d{9}")]),
      "dateofbirth": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      "password": new FormControl("", [Validators.required, Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
      "ConfirmPassword": new FormControl("", [Validators.required, Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
    }));
  }
  get firstname() {
    return this.loginForm.get("firstname")
  }
  get lastname() {
    return this.loginForm.get("lastname")
  }
  get PhoneNumber() {
    return this.loginForm.get("mobilenumber")
  }
  get dateofbirth() {
    return this.loginForm.get("dateofbirth")
  }
  get email() {
    return this.loginForm.get("email")
  }
  get password() {
    return this.loginForm.get("password")
  }
  get confirmPassword() {
    return this.loginForm.get("ConfirmPassword")
  }
  submitData() {
    console.log(this.loginForm.value);
    localStorage.setItem("first_Name", this.loginForm.value.firstname)
    localStorage.setItem("Last_Name", this.loginForm.value.lastname)
    localStorage.setItem("mobilenumber", this.loginForm.value.mobilenumber)
    localStorage.setItem("dateofbirth", this.loginForm.value.dateofbirth)
    localStorage.setItem("email", this.loginForm.value.email)
    localStorage.setItem("ConfirmPassword", this.loginForm.value.ConfirmPassword)
    this.name = localStorage.getItem("first_Name");
    this.lastnamedisplay = localStorage.getItem("Last_Name");
    this.list_Of_Data.push(this.loginForm.value)

  }

}
