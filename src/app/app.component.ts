import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
// import {Component, Output, EventEmitter} from 'angular/core';
@Component({
    selector:'child',
    template:`<button (click)="sayHello()">Greet</button>`
})
export class Child{
    @Output() greeting = new EventEmitter();
    sayHello(){
        this.greeting.emit({greeting:'hello'});
    }
}
@Component({
    selector:'parent',
    template:`<child (greeting)="onGreeting($event)"></child>`
})
export class Parent{
    onGreeting(e){
        console.log(e);
    }
}
