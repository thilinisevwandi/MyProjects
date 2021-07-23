import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngular';
  values = '';

  setValues(e) {
    this.values = e.target.value + 55;
  }

  tableData = '';

  constructor (private myFirstService : RecordsService) {

  }

  ngOnInit() {
    this.myFirstService.getData().subscribe(data => {
      console.log(data);
    });
  }

}
