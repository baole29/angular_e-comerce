import { Component } from '@angular/core';
import { ILogin } from 'src/app/interfaces/i-login.interface';
import * as input from '@grapecity/wijmo.input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credential: ILogin = {
    username: "",
    password: ""
  }

  validation = (ctrl: input.InputMask) => {
    const pattern = "^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$";
    try {
      return  !new RegExp(pattern).test(ctrl.value)
    } catch (ex) {
      console.log(ex)
      return true
    }

  }

  lostFocus = (ctrl: input.InputMask) =>{
    console.log(ctrl.isRequired)
  }


  login = () =>{
    console.log(this.credential.username)
    
  }

}
