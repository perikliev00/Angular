import { Component ,OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  a='age:23 soon 24...';
  toggle=false;
  handleClick() {
    console.log('clicked');
    this.toggle=!this.toggle;
    console.log(this.toggle);
  }
  OnDestroy() {
    console.log('destroyed')
  }
  OnInit() {
    console.log('on init ');
  }
}
