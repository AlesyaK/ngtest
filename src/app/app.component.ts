import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {IUser, users$} from "./users";
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.Native
  // interpolation: ['[', '/'] заменить символы
})
export class AppComponent implements OnInit/*, OnDestroy*/ {
  public title = 'Ng Cource';
  public logoSrc = 'assets/images/primeng.png';
  public logoWidth = 50;
  public placeholder = 'Search Term';
  public dataUrl = 'https://learn.javascript.ru/courses/groups/api/participants?key=ovxw4e';
  public searchTerm;
  public users: Observable<IUser[]> = users$;
  public subscribtion: Subscription;

  public changeTitle(e: MouseEvent): void {
    // this.title = `${this.title} Hi Hi Hi`;
    console.log(e.target);
  }

  public onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  public ngOnInit(): void {
    // this.subscribtion = users$.subscribe((users: IUser[]) => {
    //   this.users = users;
    // });
  }

  // public ngOnDestroy(): void {
  //   this.subscribtion.unsubscribe();
  // }

  // public someArray = [1, 2, 3];
  //
  // private _rate = 2000;
  //
  // public getMoney(): number {
  //   return this._rate * 2;
  // }
}
