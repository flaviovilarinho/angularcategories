import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/models/Category";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: "app-category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
    categories: Category[] = [];

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.getAll().subscribe((data: Category[]) => {
            this.categories = data;
        });
    }

    delete(id: number) {
        this.api.delete(id).subscribe(() => {
            this.ngOnInit();
        });
    }
}
