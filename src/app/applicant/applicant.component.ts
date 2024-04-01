import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.css',
})
export class ApplicantComponent {
  //role = JSON.parse(localStorage.getItem('loginInfo') || '{}');
  //isHR=this.role.role=='Execute HR';
  //u_id=this.role.u_id
  dataSource: any;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getapplicant();
  }
  openJD(): void {
    const dialogRef = this.dialog.open(AddjdComponent, {
      width: '80%',
      height: '600px',
    });
  }
  apply(): void {
    const dialogRef = this.dialog.open(JobApplyComponent, {
      width: '80%',
      height: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getapplicant();
    });
  }
  getapplicant() {
    //const obj={u_id:this.u_id,role:this.isHR}
    this.http.getapplicant().subscribe((data: any) => {
      console.log(data);
      this.dataSource = data.rows;
    });
  }

  displayedColumns: String[] = [
    'app_id',
    'firstname',
    'lastname',
    'email',
    'phone_no',
    'exp',
    'city',
    'previous_company',
    'previous_salary',
    'expected_salary',
    'notice_period',
    'data_of_availability',
    'pin',
  ];
}

@Component({
  selector: 'app-addjd',
  templateUrl: './addjd.component.html',
  styleUrl: './applicant.component.css',
})
export class AddjdComponent {
  constructor(public dialogRef: MatDialogRef<AddjdComponent>) {}
  close() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrl: './applicant.component.css',
})
export class JobApplyComponent {
  form: any;

  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<JobApplyComponent>
  ) {
    this.myform();
  }
  myform() {
    this.form = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone_no: ['', Validators.required],
      exp: ['', Validators.required],
      city: ['', Validators.required],
      previous_company: ['', Validators.required],
      previous_salary: ['', Validators.required],
      expected_salary: ['', Validators.required],
      notice_period: ['', Validators.required],
      data_of_availability: ['', Validators.required],
      pin: ['', Validators.required],
    });
  }
  // //onchange(eveny:any)
  // {
  //   cosnt formData=new formdatat
  // }
  submitForm() {
    const obj = this.form.value;
    console.log(obj);
    this.http.postapplicant(obj).subscribe((res) => {
      this.dialogRef.close();
    });
  }
}
