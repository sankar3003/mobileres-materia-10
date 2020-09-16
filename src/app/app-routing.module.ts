import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablerComponent } from './tabler/tabler.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';


const routes: Routes = [
  {
path:'',
redirectTo:'/dashboard',
pathMatch:"full"
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'tabler',
    component:TablerComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"tree",
    component:TreeComponent
  },
  {
    path:"drag-drop",
    component:DragDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
