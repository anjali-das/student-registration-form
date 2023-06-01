import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
table:any

constructor(private api:ApiService,private dashboardRouter:Router){}


ngOnInit() {
  this.api.allStudents()
  .subscribe((result:any)=>{
console.log(result);
this.table=result
  })
 
}

home(){
  this.dashboardRouter.navigateByUrl('')
}

}





