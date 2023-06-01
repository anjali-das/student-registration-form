import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }

  register(firstname:any,lastname:any,address:any,email:any,mobile:any,dob:any,gender:any,group:any){


const body = {
  
  firstname,
  lastname,
  address,
  email,
  mobile,
  dob,
  gender,
  group

}

    // make api call to server for register
   return this.http.post('http://localhost:3000/register',body)
  }

// get allStudents
allStudents(){
  return this.http.get('http://localhost:3000/dashboard')


}
  
}
