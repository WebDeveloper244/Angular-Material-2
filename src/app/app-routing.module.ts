import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { AnalyticsComponent } from './admin-component/analytics/analytics.component';
import { AngularComponent } from './admin-component/angular/angular.component';
import { NodeComponent } from './admin-component/node/node.component';
import { BootstrapComponent } from './admin-component/bootstrap/bootstrap.component';

const routes: Routes = [
  {
    path:"", 
    component:DashboardComponent
  },
  {
    path:"dashboard", 
    component:DashboardComponent
  },
  {
    path:"analytics", 
    component:AnalyticsComponent
  },
  {
    path:"angular", 
    component:AngularComponent
  },
  {
    path:"node", 
    component:NodeComponent
  },
  {
    path:"bootstrap", 
    component:BootstrapComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
