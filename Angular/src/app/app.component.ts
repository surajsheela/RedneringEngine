import { Component } from '@angular/core';
import { FetchjsondataService } from './fetchjsondata.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  responseArray: Array<any>;
  constructor(private servicefetch: FetchjsondataService) {
  }
  ngOnInit(): void {
  }
  loadEmployeeData(): void {
    this.servicefetch.getData().subscribe(
      data => {
        this.responseArray = data;
      }
    );
  }
}
