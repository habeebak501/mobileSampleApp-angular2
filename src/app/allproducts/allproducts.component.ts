import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import{LogInServices} from 'app/services/logIn-auth.service';
import {Router} from '@angular/router';
import { getJsonDataService } from 'app/services/loadData.service';
import {SharedataService} from 'app/services/sharedData.service';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  public mobileData:any=[];
  // public data:any=[];
  @Output() itemSelected=new EventEmitter<any>();
  constructor(private auth:LogInServices,private _router: Router,loadData:getJsonDataService,private share:SharedataService) {
    loadData.getJsonData()
      .subscribe(
        data =>this.mobileData = data.mobiles,
        error => console.error('Error: ' + error),
        () => console.log('Completed!' , this.mobileData)
      );
     }
  ngOnInit() {

  }
  description(data):void{
    console.log(data)
      let data1 = JSON.stringify(data);
      console.log(data1)
    this._router.navigate(['Home/product',{q:data1}]);
    }
    filterBy():any{
      return this.share.getData();
  }
}
