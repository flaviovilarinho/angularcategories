import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { Category } from "src/app/models/Category";

@Component({
    selector: "app-update",
    templateUrl: "./update.component.html",
    styleUrls: ["./update.component.scss"]
})
export class UpdateComponent implements OnInit {
    category: Category;
    categoryForm: FormGroup;
    id: string;

    constructor(
        public fb: FormBuilder,
        private router: Router,
        public api: ApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");

        this.api.getById(this.id).subscribe((data: Category) => {
            this.categoryForm.setValue({ name: data.name });
        });

        this.categoryForm = this.fb.group({
            name: [""]
        });
    }

    submitForm() {
        this.api.update(this.id, this.categoryForm.value).subscribe(res => {
            this.router.navigateByUrl("/");
        });
    }
}
