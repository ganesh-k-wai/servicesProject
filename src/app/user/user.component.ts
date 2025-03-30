import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(public ganesh:ApiService){}

  save_data(name:any,mobile:any){
    // console.log(name.value,mobile.value)
    this.ganesh.userList.push({
      "user_name" : name.value,
      "user_mobile" : mobile.value
    })
    console.log(this.ganesh.userList)
  }
}
