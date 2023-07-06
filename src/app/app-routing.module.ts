import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth-guard';
import { RoleGuard } from './guards/role-guard';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MetamaskDemoComponent } from './pages/metamask-demo/metamask-demo.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path:'single-post', component: SinglePostComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'metamask-demo', component: MetamaskDemoComponent},
  { path: 'about', component: AboutComponent},

  {
    path: '',
    children: [
      { path: 'privacy-policy', component: PrivacyPolicyComponent, canActivate: [AuthGuard]},
      { path: 'terms-conditions', component: TermsConditionsComponent},
      { path: 'about-author', component: AboutComponent},
    ],
    canActivate: [AuthGuard, RoleGuard]
  },
  { path: '**', redirectTo: '' }
];


// { 
//   path: 'admin', 
//   component: AdminComponent, 
//   canActivate: [RoleGuard], 
//   data: { 
//     expectedRole: 'admin'
//   } 
// },

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
