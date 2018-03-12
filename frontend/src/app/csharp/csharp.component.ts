import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import  { User } from './../user';
import {DataService} from '../data.service';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.css'],
  providers:[DataService]
})
export class CsharpComponent implements OnInit {
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
