import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { getJsonDataService } from 'app/services/loadData.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public mobileData;
    public data1;
    product: any;
    private sub: any;
    data : any;
constructor(private _router: Router,loadData:getJsonDataService,private route: ActivatedRoute) {
}
onNotifyClicked(data){
  console.log(data)
   this.data1=data;
  console.log("data comming from home:",this.data1)
}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     this.data = params['q'];
     this.product = JSON.parse(this.data);
   });
  }
}
