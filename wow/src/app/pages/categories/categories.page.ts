import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../rest-api.service';
import { GlobalServiceService } from '../../service/global-service.service'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private ras: RestApiService, private gs: GlobalServiceService) { }
  viewtype: boolean = true;

  categories: any = [];
  ngOnInit() {
    this.ras.getCategories().subscribe((data) => {

      var list;
      list = data;
      this.categories = list.response;


    },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      }

    );


  }
  getviewtype(type) {
    if (type == 'grid') {
      this.viewtype = false;

    }
    else {
      this.viewtype = true;
    }
    console.log(this.viewtype);
    return this.viewtype;


  }
  bkbtn() {
    if (this.gs.count == 0) {
      this.gs.backbtn = false;
      console.log(this.gs.backbtn, "inside folder", this.gs.count);
    }
    this.gs.count--;
    console.log(this.gs.backbtn, "inside folder", this.gs.count);
  }
  forward() {
    this.gs.count++;
    this.gs.backbtn = true;
    console.log(this.gs.backbtn, "forward folder", this.gs.count);
  }

}
