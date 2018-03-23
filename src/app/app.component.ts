import { Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './cmpnt/header/header.component';
import { FooterComponent } from './cmpnt/footer/footer.component';
import { HomeComponent } from './cmpnt/home/home.component';
import { AboutComponent } from './cmpnt/about/about.component';
import { PortfolioComponent } from './cmpnt/portfolio/portfolio.component';
import { ContactComponent } from './cmpnt/contact/contact.component';
import { ProductComponent } from './cmpnt/product/product.component';
import { BlogComponent } from './cmpnt/blog/blog.component';
import { BlogdetailComponent } from './cmpnt/blogdetail/blogdetail.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';
}
