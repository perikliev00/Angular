import { Component,EventEmitter,Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-component-styles',
  standalone: true,
  imports: [NgClass],
  templateUrl: './component-styles.component.html',
  styleUrl: './component-styles.component.css'
})
export class ComponentStylesComponent {
  @Input() unknown:string='';
  @Output() messege=new EventEmitter<string>();
  imgUrl:string;
  textColor:string;
  constructor() {
    this.imgUrl='';
    this.textColor=''
  }
  clickForImg(value:string) {
    this.imgUrl=value;
    console.log(value);
    document.getElementsByTagName('input')[0].value='';
  }
  changeColor(someColor:string) {
    this.textColor=someColor;
    console.log(this.unknown)
  }
  sendMessege() {
    this.messege.emit('Hi Alex');
  }

}
