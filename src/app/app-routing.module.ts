import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./pages/category/category.component";
import { CreateComponent } from "./pages/category/create/create.component";
import { ViewComponent } from "./pages/category/view/view.component";
import { UpdateComponent } from "./pages/category/update/update.component";

const routes: Routes = [
    { path: "", component: CategoryComponent },
    { path: "create", component: CreateComponent },
    { path: "view/:id", component: ViewComponent },
    { path: "update/:id", component: UpdateComponent },
    { path: "*", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
