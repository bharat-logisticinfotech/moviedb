import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'moviedetail/:id', component: MoviedetailComponent },
];

@NgModule({
    /*imports: [
      CommonModule
    ],
    declarations: []*/
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
