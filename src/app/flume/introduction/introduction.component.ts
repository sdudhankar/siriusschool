import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fintroduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class FIntroductionComponent implements OnInit {

    constructor(private route:Router) {
  }
  prev():void{
    this.route.navigate(['/qintroduction']);
    }
  next():void{
    this.route.navigate(['/hintroduction']);
    }

  ngOnInit() {
  }

}
