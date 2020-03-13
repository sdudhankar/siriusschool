import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sintroduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class SIntroductionComponent implements OnInit {

  constructor(private route:Router) {
  }
  prev():void{
    this.route.navigate(['/pintroduction']);
    }
  next():void{
    this.route.navigate(['/kintroduction']);
    }


  ngOnInit() {
  }

}
