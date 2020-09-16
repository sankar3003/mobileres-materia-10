import { Component, OnInit } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'primeng';
  numbers: any[];
  number: string;
  i: number=0;
  color: string;
  classes={
    test:false,
  test1:false,


  }
constructor(){}
  ngOnInit(): void {
    this.numbers= []

    while(this.i=0){
    this.numbers.push(this.i);
if(this.i/2==0){
  console.table(this.i)
  this.classes.test=true,
  this.classes.test1=true
}
if(this.i/2!=0){

this.classes.test=false
}
    }(this.i++)


  }





  getColor(n)
  {
 switch(n){
   case 1:
     return 'green'
     case 2:
       return 'orange'
 }
  }
}
