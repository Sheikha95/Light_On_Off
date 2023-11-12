import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data={
    // tech1:"Angular",
    // tech2:"Node JS",
    // tech3:"JavaScript"

    // public DemoContent='Sheikha';
  // }

  title = 'bulb_ON_OFF';

display=false;

clicked()

{

this.display=!this.display;

}
}
