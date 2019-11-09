import {Component} from '@angular/core';
import {StaffServiceService} from './services/staff-service.service';
import {NgForm} from '@angular/forms';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'staff-frontend';
    staffs: { name: string, email: string, phone: string, address: string }[] = [];

    constructor(private staffService: StaffServiceService) {
        this.getStaffs(); // Get staffs on component intialization
    }

    getStaffs() {
        this.staffService.getStaffs()
            .subscribe((res: any) => {
                this.staffs = res;
                this.staffs.reverse();
                console.log(res);
            });
    }

    onSubmit(form: NgForm){
        this.staffService.createStaff(JSON.stringify(form.value));
    }
}
