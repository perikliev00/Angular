import { Input,Component } from '@angular/core';
@Component({
  selector: 'app-component-users',
  templateUrl: './component-users.component.html',
  styleUrl: './component-users.component.css'
})
export class ComponentUsersComponent {
  toggle=false;
  handleClick() {
    console.log('clicked');
    this.toggle=!this.toggle;
  }
  @Input('usersData')"usersData": { name: string, age: number }[];
}
