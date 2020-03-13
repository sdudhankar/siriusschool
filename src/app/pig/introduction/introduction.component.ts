import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pintroduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class PIntroductionComponent implements OnInit {

  constructor(private route:Router) {
  }
  prev():void{
    this.route.navigate(['/ointroduction']);
    }
  next():void{
    this.route.navigate(['/sintroduction']);
    }


  ngOnInit() {
  }

}
