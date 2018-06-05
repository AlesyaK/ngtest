import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    //encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

    @Input()
    public placeholder;

    @Output()
    public search: EventEmitter<string> = new EventEmitter();

    constructor() { }

    public onSearch(e: KeyboardEvent): void {
        const el = e.target as HTMLInputElement;
        this.search.emit(el.value);
        console.log(el.value);
    }

    ngOnInit() {
    }

}
