import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './cmpnt/header/header.component';
import { FooterComponent } from './cmpnt/footer/footer.component';
import { HomeComponent } from './cmpnt/home/home.component';
import { AboutComponent } from './cmpnt/about/about.component';
import { PortfolioComponent } from './cmpnt/portfolio/portfolio.component';
import { ContactComponent } from './cmpnt/contact/contact.component';
import { ProductComponent } from './cmpnt/product/product.component';
import { BlogComponent } from './cmpnt/blog/blog.component';
import { BlogdetailComponent } from './cmpnt/blogdetail/blogdetail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogdetail', component: BlogdetailComponent }
];

@NgModule(
  {
  declarations: 
            [
              AppComponent,
              HeaderComponent,
              FooterComponent,
              HomeComponent,
              AboutComponent,
              PortfolioComponent,
              ContactComponent,
              ProductComponent,
              BlogComponent,
              BlogdetailComponent
            ],
  imports: 
        [
          BrowserModule,
          RouterModule.forRoot(appRoutes)
        ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
