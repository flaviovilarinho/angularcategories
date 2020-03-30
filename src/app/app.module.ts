import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CategoryComponent } from "./pages/category/category.component";
import { CreateComponent } from "./pages/category/create/create.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { UpdateComponent } from './pages/category/update/update.component';
import { ViewComponent } from './pages/category/view/view.component';

@NgModule({
    declarations: [AppComponent, CreateComponent, CategoryComponent, UpdateComponent, ViewComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
