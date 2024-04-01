import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErpserviceService } from '../_services/erpservice.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userDetails: any = [];
  dataSource: any;
  open: boolean = false;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AdduserComponent, {
      width: '60%',
      height: '450px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }
  displayedColumns: String[] = [
    'user_id',
    'username',
    'dept_name',
    'role_name',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getdata() {
    this.http.getuser().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data.rows);
      this.dataSource.paginator = this.paginator;
    });
  }
  setFilter(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './user.component.css',
})
export class AdduserComponent {
  //departments: any;
  form: any;
  alldept: any = [];
  allrole: any = [];
  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AdduserComponent>
  ) {
    this.myform();

    this.getDepartment();
  }
  getDepartment() {
    this.http.getdepartment().subscribe((data: any) => {
      this.alldept = data.rows;
    });
  }

  myform() {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      dept_id: ['', Validators.required],
      role_id: ['', Validators.required],
    });
  }
  onChanges(event: any) {
    const obj = { dept_id: event.value };
    console.log(obj);
    this.http.getrolefordepartment(obj).subscribe((data: any) => {
      console.log(data);
      this.allrole = data.rows;
    });
  }

  save() {
    const user = this.form.value;
    console.log(user);
    this.http.postuser(user).subscribe((data: any) => {
      if (data.success) {
        this.dialogRef.close();
      }
    });
  }
  Close() {
    this.dialogRef.close();
  }
}
