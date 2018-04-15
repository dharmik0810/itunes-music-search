import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iTunes Music Search App';
  doSearch(search: String){
    console.log('Search value:',search);
  }
}
