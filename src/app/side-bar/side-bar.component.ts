import { Component, OnInit } from '@angular/core';
import {SharedataService} from 'app/services/sharedData.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  openNav() {
      document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }
  constructor(private share:SharedataService) { }
  public data = [
          {
            title: 'manufacturer',
            content: ['Apple', 'Samsung', 'HTC', 'Nokia', 'Sony']
          },
          {
            title: 'storage',
            content: ['16', '32']
          },
          {
             title: 'os',
            content: ['Android', 'iOS', 'Windows']
          },
          {
            title: 'camera',
            content: ['5', '8', '13', '16']
          }
     ];
  ngOnInit() {
  }
  public pipeData = {
      manufacturer:[],
      storage:[],
      os:[],
      camera:[]
    };

    getProperty(filter){
      return this.pipeData[filter];
    }

    setProperty(value){
      this.share.setData(JSON.stringify(value));
    }

    checkedContent(filter,val){
      console.log(this.pipeData)
        let key = this.getProperty(filter);
        if ((<HTMLInputElement>document.getElementById(val)).checked === true) {
            key.push(val);
        }
        else{
            if ((<HTMLInputElement>document.getElementById(val)).checked === false) {
                let uncheck = key.indexOf(val);
                key.splice(uncheck,1);
            }
        }
        this.setProperty(this.pipeData);
    }
    clearAll(){
        this.pipeData = {
          manufacturer:[],
          storage:[],
          os:[],
          camera:[]
        };
        this.setProperty(this.pipeData);
    }
}
