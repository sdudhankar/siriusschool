import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hintroduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class CIntroductionComponent implements OnInit {

  constructor(private route:Router) {
  }
  prev():void{
    this.route.navigate(['/bintroduction']);
    }
  next():void{
    this.route.navigate(['/ointroduction']);
    }

  ngOnInit() {
  }

}
