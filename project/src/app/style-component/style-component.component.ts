import { Input,Component } from '@angular/core';

@Component({
  selector: 'app-style-component',
  templateUrl: './style-component.component.html',
  styleUrl: './style-component.component.css'
})
export class StyleComponentComponent {
@Input('usersData')"usersData" :{name:string,age:number}[];
}
