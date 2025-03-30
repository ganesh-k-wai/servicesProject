import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  counter : number =1;
  constructor() { }

  inc()
  {
    this.counter++
    console.log(this.counter)
  }
  dec(){
    this.counter--
    console.log(this.counter)
  }

  userList :any = []
}
