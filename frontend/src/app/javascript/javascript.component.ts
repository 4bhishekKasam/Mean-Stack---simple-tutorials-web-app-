import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import  { User } from './../user';
import {DataService} from '../data.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  dataList : User[]=[];

  constructor(private dataService: DataService) { }

  getDetails(){
    this.dataService.getData()
       .subscribe(users =>{
          this.dataList = users;
            console.log('data from dataservice: '+ this.dataList);
    });
  }

  ngOnInit() { 
    this.getDetails();
  }


}
