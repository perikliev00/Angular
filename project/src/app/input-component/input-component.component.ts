import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css'
})
export class InputComponentComponent {
  arr:any=[]=[];
  clickButton(textAreaValue:HTMLTextAreaElement) {
    console.log(textAreaValue.value);
    this.arr.push(textAreaValue.value);
    textAreaValue.value=''
    console.log(this.arr);
  }
}
