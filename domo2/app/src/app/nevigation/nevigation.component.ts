import { Component, input } from '@angular/core';
import { NgIf,NgFor} from '@angular/common';
import { NgForOf } from '@angular/common';
import { Input } from '@angular/core';
@Component({
  selector: 'app-nevigation',
  standalone: true,
  imports: [NgIf,NgFor,NgForOf],
  templateUrl: './nevigation.component.html',
  styleUrl: './nevigation.component.css'
})
export class NevigationComponent {
  @Input()myArr:any='';
  tittle="My Variable"
  toggle=false;
  handleToggle() {
    this.toggle=!this.toggle
    console.log(this.toggle);
    console.log(this.myArr);
  }
  arr= [
    {name:"alex",age:"21"},
    {name:"John",age:"63"},
    {name:"Vlado",age:"16"},
    {name:"Pesho",age:"31"}
  ]
}
