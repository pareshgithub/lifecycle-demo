import { Component, SimpleChange, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements
OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("@ FirstChildComponent - constructor");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("@ FirstChildComponent - ngOnChanges");
  }

  ngOnInit(){
    console.log("@ FirstChildComponent - ngOnInit");
  }

  ngDoCheck(){
    console.log("@ FirstChildComponent - ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("@ FirstChildComponent - ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("@ FirstChildComponent - ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("@ FirstChildComponent - ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("@ FirstChildComponent - ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("@ FirstChildComponent - ngOnDestroy");
  }

}
