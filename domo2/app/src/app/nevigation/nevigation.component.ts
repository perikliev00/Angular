import { Component } from '@angular/core';
import { NgIf,NgFor} from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-nevigation',
  standalone: true,
  imports: [NgIf,NgFor,NgForOf],
  templateUrl: './nevigation.component.html',
  styleUrl: './nevigation.component.css'
})
export class NevigationComponent {
  tittle="My Variable"
  toggle=false;
  handleToggle() {
    this.toggle=!this.toggle
    console.log(this.toggle);
  }
  arr= [
    {name:"alex",age:"21"},
    {name:"John",age:"63"},
    {name:"Vlado",age:"16"},
    {name:"Pesho",age:"31"}
  ]
}
