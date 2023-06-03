import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  signUpUsers:any [] = [];
  signUpObj:any={
    userName:'',
    Email:'',
    passWord:''
  }
  logInObj:any={
    userName:'',
    password:''
  }


   constructor(){
   }
   ngOnInit(): void {  
    const localData = localStorage.getItem('signUpUsers')
    if(localData != null){
      this.signUpUsers=JSON.parse(localData);
    }

   }
   signUp(){
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));
    this.signUpObj={
    userName:'',
    Email:'',
    passWord:''
  }
   }
   logIn(){
    const isUserExist = this.signUpUsers.find(m =>m.userName == this.logInObj.userName && m.passWord ==  this.logInObj.password)
    if(isUserExist != undefined){
      alert("Sucessfully Logined")
    }
    else{
      alert("Invalid Credentials")
    }
  }
}
