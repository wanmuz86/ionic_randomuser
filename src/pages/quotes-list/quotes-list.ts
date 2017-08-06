import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {QuotesDetailPage} from '../quotes-detail/quotes-detail'

/**
 * Generated class for the QuotesListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes-list',
  templateUrl: 'quotes-list.html',
})
export class QuotesListPage {

usersList = [];
filteredQuotes = [];
isfiltered: boolean ;

  constructor(private http:Http, public navCtrl: NavController) {
  this.isfiltered = false;
  this.http.get('https://randomuser.me/api?results=10')
  .map(res => res.json())
  .subscribe(
  data => {
  this.usersList = data.results;
  },
  err => console.log("error is "+err),
  () => console.log('read quotes Complete' +this.usersList)
  );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesListPage');
  }

  itemTapped(event, user){
  console.log(user);
  this.navCtrl.push(QuotesDetailPage, {
  user:user
  });
  }

}
