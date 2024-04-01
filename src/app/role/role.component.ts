import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrl: './role.component.css',
})
export class RoleComponent {
  RoleDetails: any = [];
  dataSource: any;
  open: boolean = false;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddroleComponent, {
      width: '50%',
      height: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getdata() {
    this.http.getroles().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data.rows);
      this.dataSource.paginator = this.paginator;
    });
  }
  displayedColumns: any[] = ['role_id', 'role_name', 'dept_name'];
}

//----------------------------
@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrl: './role.component.css',
})
export class AddroleComponent {
  departments: any;
  form: any;
  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AddroleComponent>
  ) {
    this.myform();
    this.getDepartment();
  }
  //to fetch department
  getDepartment() {
    this.http.getdepartment().subscribe((data: any) => {
      console.log(data);
      this.departments = data.rows;
    });
  }
  myform() {
    this.form = this.formbuilder.group({
      role_name: ['', Validators.required],
      dept_id: ['', Validators.required],
    });
  }

  SubmitForm() {
    const obj = this.form.value;
    console.log(obj);
    this.http.postrole(obj).subscribe((data: any) => {
      if (data.success) {
        this.dialogRef.close();
      }
    });
  }
  Close() {
    this.dialogRef.close();
  }
}
