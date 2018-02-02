import { OverviewComponent } from './overview/overview.component';
import { SpecsComponent } from './specs/specs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopularComponent } from './popular/popular.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'popular', component: PopularComponent },
    {
        path: 'syntax', component: SyntaxComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent },
            { path: 'specs', component: SpecsComponent }
        ]
    },
    { path: 'moviedetail/:id', component: MoviedetailComponent },
];

@NgModule({
    /*imports: [
      CommonModule
    ],
    declarations: []*/
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
