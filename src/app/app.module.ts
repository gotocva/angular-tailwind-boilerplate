import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MetamaskDemoComponent } from './pages/metamask-demo/metamask-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    SinglePostComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    HomeComponent,
    SignUpComponent,
    SidenavComponent,
    DashboardComponent,
    MetamaskDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
