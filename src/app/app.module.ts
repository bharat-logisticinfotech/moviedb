import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopularComponent } from './popular/popular.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopularService } from './popular.service';
import { ParentChildService } from './parent-child.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpModule } from '@angular/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SyntaxComponent } from './syntax/syntax.component';
import { ExponentPipe } from './exponent.pipe';
import { OverviewComponent } from './overview/overview.component';
import { SpecsComponent } from './specs/specs.component';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        PopularComponent,
        MoviedetailComponent,
        PaginationComponent,
        SyntaxComponent,
        ExponentPipe,
        OverviewComponent,
        SpecsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        // HttpClientModule,
        HttpModule,
        InfiniteScrollModule,
        // NgxPaginationModule
    ],
    providers: [
        PopularService,
        ParentChildService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);

platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }]
});
