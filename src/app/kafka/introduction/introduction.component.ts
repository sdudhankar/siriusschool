import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kintroduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class KIntroductionComponent implements OnInit {

  constructor(private route:Router) {
  }
  prev():void{
    this.route.navigate(['/sintroduction']);
    }
  next():void{
    this.route.navigate(['/bintroduction']);
    }

  ngOnInit() {
  }

}
