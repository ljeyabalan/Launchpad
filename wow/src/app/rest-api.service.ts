import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; import { from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    constructor(private http: HttpClient) { }
    public URL = "http://localhost:3000/api"
    public subscribepartnerget;
    public loindetialspartner;

    loginpartner(loginget) {
        return this.http.post(this.URL + "/partner/login", loginget);
    }
    allproducts(link) {
        console.log(this.URL + "/products/" + link);
        let a;
        if (link != null) {
            a = this.http.get(this.URL + "/products/" + link);
        }
        else {
            a = this.http.get(this.URL + "/products");
        }
        console.log(typeof (a));
        return a;
    }
    partnersingup(data) {
        return this.http.post(this.URL + "/partner/login", data);
    }
    getCategories() {
        return this.http.get(this.URL + "/products/categorylist")
    }
    getSearch(id) {
        console.log(id);
        return this.http.get(this.URL + "/products/search/", {
            params: {
                id: id,
            }
        });
    }


}
