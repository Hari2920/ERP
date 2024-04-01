import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-plantmaster',
  templateUrl: './plantmaster.component.html',
  styleUrl: './plantmaster.component.css',
})
export class PlantmasterComponent {
  DepartmentDetails: any = [];
  dataSource: any;
  open: boolean = false;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddplantComponent, {
      width: '50%',
      height: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }
  displayedColumns: String[] = ['plant_id', 'plant_name', 'address'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getdata() {
    this.http.getplant().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data.rows);
      this.dataSource.paginator = this.paginator;
    });
  }
}
@Component({
  selector: 'app-addplant',
  templateUrl: './addplant.component.html',
  styleUrl: './plantmaster.component.css',
})
export class AddplantComponent {
  form: any;
  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AddplantComponent>
  ) {
    this.myform();
  }
  myform() {
    this.form = this.formbuilder.group({
      plant_id: ['', Validators.required],
      plant_name: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  submitForm() {
    const obj = this.form.value;
    console.log(obj);
    this.http.postplant(obj).subscribe((data: any) => {
      if (data.success) {
        this.dialogRef.close();
      }
    });
  }
  Close() {
    this.dialogRef.close();
  }
}
