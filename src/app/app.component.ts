import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.Native
  // interpolation: ['[', '/'] заменить символы
})
export class AppComponent {
  public title = 'Ng Cource';
  public logoSrc = 'assets/images/primeng.png';
  public logoWidth = 50;
  public placeholder = 'Search Term';

  public changeTitle(e: MouseEvent): void {
    // this.title = `${this.title} Hi Hi Hi`;
    console.log(e.target);
  }

  // public someArray = [1, 2, 3];
  //
  // private _rate = 2000;
  //
  // public getMoney(): number {
  //   return this._rate * 2;
  // }
}
