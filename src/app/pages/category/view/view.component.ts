import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/models/Category";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-view",
    templateUrl: "./view.component.html",
    styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
    category: Category;
    id: string;

    constructor(private api: ApiService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");

        this.api.getById(this.id).subscribe((data: Category) => {
            this.category = data;
        });
    }
}
