import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerErrorMsg:string = ""
  registerSuccessMsg:string = ""
  


  // form group
  registerForm = this.registerFb.group({
    firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    address: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    group:['',[Validators.required]],


  })





  constructor(private registerFb: FormBuilder,private api:ApiService,private registerRouter:Router) {

  }
  register() {
    //   alert('registration Clicked!!!!!')
    //  console.log(this.registerForm);

    if (this.registerForm.valid) {
      let firstname = this.registerForm.value.firstname
      let lastname = this.registerForm.value.lastname
      let address = this.registerForm.value.address
      let email = this.registerForm.value.email
      let mobile = this.registerForm.value.mobile
      let dob = this.registerForm.value.dob
      let gender = this.registerForm.value.gender
      let group = this.registerForm.value.group

      // api call for register
      this.api.register(firstname,lastname,address,email,mobile,dob,gender,group)
      .subscribe(
        // response 200
        (result:any)=>{
          this.registerSuccessMsg = result.message
          setTimeout(()=>{
          // redirect to dashboard page
        this.registerRouter.navigateByUrl('dashboard')
          },3000)
        
        },
        // response 400
        (result:any)=>{
          this.registerErrorMsg = result.error.message
          setTimeout(()=>{
            this.registerForm.reset()
            this.registerErrorMsg = ""
              },3000);
        }
        )
        

    }
    else {
      alert('Invalid Form...')

    }
  }

}
