import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Category } from "../models/Category";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    api: string = "http://localhost:4200/api";

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    constructor(private http: HttpClient) {}

    create(product): Observable<Category> {
        return this.http
            .post<Category>(
                this.api + "/category",
                JSON.stringify(product),
                this.httpOptions
            )
            .pipe(catchError(this.errorHandler));
    }
    getById(id): Observable<Category> {
        return this.http
            .get<Category>(this.api + "/category/" + id)
            .pipe(catchError(this.errorHandler));
    }

    getAll(): Observable<Category[]> {
        return this.http
            .get<Category[]>(this.api + "/category")
            .pipe(catchError(this.errorHandler));
    }

    update(id, product): Observable<Category> {
        return this.http
            .put<Category>(
                this.api + "/category/" + id,
                JSON.stringify(product),
                this.httpOptions
            )
            .pipe(catchError(this.errorHandler));
    }

    delete(id) {
        return this.http
            .delete<Category>(this.api + "/category/" + id)
            .pipe(catchError(this.errorHandler));
    }

    errorHandler(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
