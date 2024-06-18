import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NevigationComponent } from './nevigation/nevigation.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NevigationComponent,ComponentStylesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tittle = 'app';
  secondArr=[1,2,3,4];
  myMassage:string='';
  recivedFunc(messege:string) {
    this.myMassage=messege;
    console.log(this.myMassage);
  }
}
