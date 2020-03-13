import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $ : any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siriusschool';
  constructor(private route:Router) { 
    /*This code helps to start each and every webpage from top*/ 
        $(document).ready(function(){
            $(this).scrollTop(0);
        });
      }
  ngOnInit()
  {
//Side bar Toggle
$(document).ready(function(){
  var flag=0;
           $('#sidebarCollapse').on('click', function () {
                     
          if(flag){
          $('.main').css('margin-left', '0');
          flag=0;
          alert("if")
          }
          else{
          $('.main').css('margin-left', '250px');
          flag=1;
          }
                   });
               });
//End
    //Top button appearing and disappering coding            
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           document.getElementById("myBtn").style.display = "block";
       } else {
           document.getElementById("myBtn").style.display = "none";
       }
   }
   
  }
  //title = 'app';
 //To go Top
 
// When the user clicks on the button, scroll to the top of the document
 topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Prev and Next button appear and disappear code

ngAfterViewInit(){
  //To hide and show Top prev and next button 
 var mywindow = $(window);
 var mypos = mywindow.scrollTop();
 mywindow.scroll(function() {
     if(mywindow.scrollTop() > 14)
     {
         $('.btn').fadeOut(); 
     }
     else
     {
         $('.btn').fadeIn();
     }
     mypos = mywindow.scrollTop();
 });
  
}
}
