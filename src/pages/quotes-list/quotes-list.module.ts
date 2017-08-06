import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesListPage } from './quotes-list';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {QuotesDetailPage} from '../quotes-detail/quotes-detail'
@NgModule({
  declarations: [
    QuotesListPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesListPage),
  ],
})
export class QuotesListPageModule {}
