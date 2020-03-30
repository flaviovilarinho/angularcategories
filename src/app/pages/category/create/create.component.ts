import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
    categoryForm: FormGroup;

    constructor(
        public fb: FormBuilder,
        private router: Router,
        public api: ApiService
    ) {}

    ngOnInit() {
        this.categoryForm = this.fb.group({
            name: [""]
        });
    }

    submitForm() {
        this.api.create(this.categoryForm.value).subscribe(() => {
            this.router.navigateByUrl("/");
        });
    }
}
