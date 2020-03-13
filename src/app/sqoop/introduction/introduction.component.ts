import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qintroduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class QIntroductionComponent implements OnInit {

  constructor(private route:Router) {
  }
  prev():void{
    this.route.navigate(['/introduction']);
    }
  next():void{
    this.route.navigate(['/fintroduction']);
    }

  ngOnInit() {
  }

}
