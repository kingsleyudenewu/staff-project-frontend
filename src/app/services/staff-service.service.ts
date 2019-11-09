import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
    providedIn: 'root'
})
export class StaffServiceService {
    private baseUrl = 'http://127.0.0.1:8000/api/v1/staff';

    constructor(private http: HttpClient) {
    }

    createStaff(body) {
        return this.http.post(this.baseUrl, body);
    }

    updateStaff(sid: string, todo) {
        return this.http.put(`${this.baseUrl}/${sid}`, {...todo});
    }

    searchStaff(sid: string) {
        return this.http.get(`${this.baseUrl}/${sid}`);
    }

    getStaffs() {
        return this.http.get(this.baseUrl);
    }
}
