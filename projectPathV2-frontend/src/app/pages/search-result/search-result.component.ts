import { Component } from '@angular/core';

@Component({
  selector: 'ngx-search-result',
  templateUrl: './search-result.component.html',
})

export class SearchResultComponent {
    
    private selected_item : string = '';

    clickItem(text:string){
        this.selected_item = text;
        console.log( " >>> " + text);
        
    }
}