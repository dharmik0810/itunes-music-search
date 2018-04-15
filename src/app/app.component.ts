import { SearchService } from './search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private itunes: SearchService){}
  title = 'iTunes Music Search App';
  doSearch(search: String){
    this.itunes.search(search);
  }
}
