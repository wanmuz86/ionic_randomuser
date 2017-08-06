import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuotesDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes-detail',
  templateUrl: 'quotes-detail.html',
})
export class QuotesDetailPage {

userDetail : {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.userDetail = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesDetailPage');
  }

}
