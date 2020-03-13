import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {  
  constructor(private route:Router) {
  }
  next():void{
    this.route.navigate(['/introduction']);
    }
  ngOnInit() {
  }
}
