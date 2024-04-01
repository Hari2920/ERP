import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {
  DepartmentDetails: any = [];
  dataSource: any;
  open: boolean = false;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AdddepartmentComponent, {
      width: '50%',
      height: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }
  displayedColumns: String[] = ['dept_id', 'dept_name', 'short_id'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getdata() {
    this.http.getdepartment().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data.rows);
      this.dataSource.paginator = this.paginator;
    });
  }
  Filterchange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}
@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrl: './department.component.css',
})
export class AdddepartmentComponent {
  form: any;
  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AdddepartmentComponent>
  ) {
    this.myform();
  }

  myform() {
    this.form = this.formbuilder.group({
      dept_id: ['', Validators.required],
      dept_name: ['', Validators.required],
      short_id: ['', Validators.required],
    });
  }
  submitForm(form: any) {
    this.http.postdepartment(this.form.value).subscribe((data: any) => {
      if (data.success) {
        this.dialogRef.close();
      }
    });
  }
  Close() {
    this.dialogRef.close();
  }
}
