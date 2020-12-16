import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardFriendsComponent } from './card-friends/card-friends.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { CardYourpagesComponent } from './card-yourpages/card-yourpages.component';
import { SidebarLinksComponent } from './sidebar-links/sidebar-links.component';
import { ContentCenterComponent } from './content-center/content-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardFriendsComponent,
    CardSearchComponent,
    CardYourpagesComponent,
    SidebarLinksComponent,
    ContentCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
