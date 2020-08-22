import { Component, SimpleChange, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements
OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("@ SecondChildComponent - constructor");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("@ SecondChildComponent - ngOnChanges");
  }

  ngOnInit(){
    console.log("@ SecondChildComponent - ngOnInit");
  }

  ngDoCheck(){
    console.log("@ SecondChildComponent - ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("@ SecondChildComponent - ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("@ SecondChildComponent - ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("@ SecondChildComponent - ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("@ SecondChildComponent - ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("@ SecondChildComponent - ngOnDestroy");
  }

}
