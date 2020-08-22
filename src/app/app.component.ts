import { Component, SimpleChange, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'lifecycle-demo';
  name="Subhrajit";

  constructor() {
    console.log("@ Parent - constructor");
    console.log("NAme is " + this.name);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("@ Parent - ngOnChanges");
    console.log("NAme is " + this.name);
  }

  ngOnInit(){
    console.log("@ Parent - ngOnInit");
    this.name="Santanu";
    console.log("NAme is " + this.name);
  }

  ngDoCheck(){
    console.log("@ Parent - ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("@ Parent - ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("@ Parent - ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("@ Parent - ngAfterViewInit");
    console.log("NAme is in view init" + this.name);
  }

  ngAfterViewChecked(){
    console.log("@ Parent - ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("@ Parent - ngOnDestroy");
  }
}
