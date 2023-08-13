import { Component , OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform =  new FormGroup({
    email:new FormControl("",[Validators.required ,  Validators.email]),
    password:new FormControl("",[Validators.required ,  Validators.minLength(5)]),
  })

  constructor(private router : Router ){}

  ngOnInit():void{}

  
  submit(){
    if(this.loginform.value.email == "japjeet@gmail.com" && this.loginform.value.password =="123456"){
      alert("LOGIN SUSSESSFUL")
    }
    else{
      
      alert("LOGIN FAILED")
    }
  }
  
}