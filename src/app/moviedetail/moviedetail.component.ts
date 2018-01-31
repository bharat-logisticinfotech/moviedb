import { PopularService } from './../popular.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-moviedetail',
    templateUrl: './moviedetail.component.html',
    styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
    movieId: number;
    movie = <any>{};

    constructor(public activatedRoute: ActivatedRoute,
        public popularService: PopularService) { }

    ngOnInit() {
        this.movieId = this.activatedRoute.snapshot.params['id'];
        this.popularService.getMovie(this.movieId)
            .subscribe((response) => {
                this.movie = response;
                this.movie.poster_path = 'http://image.tmdb.org/t/p/original' + this.movie.poster_path;
            }, (error) => {
                //
            });
    }

}
