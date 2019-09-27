import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>{{ title }}!</h1>

  //   <button (click)="show = !show">Toggle</button>

  //   <div 🙈="show">
  //     ngIf works 🎉
  //     <ul>
  //       <li 🔁="let item of items">({{ item }}) ngFor works 🎉</li>
  //     </ul>
  //   </div>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello revo.js 👋';

  myModel = 'Hello Romania!';

  myStyles = {
    background: 'green',
    padding: '10px',
    marginTop: '10px',
    color: 'white'
  };

  show = true;

  items = [1, 2, 3, 4, 5];
}
