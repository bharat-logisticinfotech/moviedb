import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentChildService } from '../parent-child.service';

@Component({
    selector: 'app-syntax',
    templateUrl: './syntax.component.html',
    styleUrls: ['./syntax.component.css']
})
export class SyntaxComponent implements OnInit {
    fieldOne = 0;
    fieldTwo = 0;
    totalValue = 0;

    tempColorName = '';
    boxColor = '';
    boxColorClass = '';

    birthday = new Date(1988, 3, 15);
    amount = 100.3300;
    pr = 0.25;
    expVal = 2;

    parentData = [];
    sub = 0;
    id = 0;

    constructor(public parentChildService: ParentChildService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.parentData = this.parentChildService.ranges;
        this.sub = this.route.params.
            subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number
            });
    }

    getValue() {
        return 10;
    }

    makeTotal() {
        // this.totalValue = this.fieldOne + this.fieldTwo;
    }

    setBoxColor(cname) {
        this.tempColorName = cname;
    }
    setColor(color) {
        this.boxColor = '3px solid ' + this.tempColorName;
        this.boxColorClass = this.tempColorName;
    }

    // ngOnDestroy() {
    //     this.sub.unsubscribe();
    // }
}
