import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations/validations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  submitted = false
  // loginForm = this.fb.group({
  //   userName: ['',Validators.required, Validators.minLength(4)],
  //   password: [''],
  // });

  loginForm = new FormGroup({
    userName: new FormControl('', [ValidationsService.required, ValidationsService.minLength(5), ValidationsService.maxLength(10)]),
    password: new FormControl('', [ValidationsService.required, ValidationsService.passwordValid])	 
 });

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log(this.loginForm.get('password')?.hasError('passwordvalid'))
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}

  constructor(private fb: FormBuilder) {}
}
