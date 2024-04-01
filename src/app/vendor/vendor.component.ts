import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css',
})
export class VendorComponent {
  vendorDetails: any = [];
  dataSource: any;
  open: boolean = false;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddvendorComponent, {
      width: '50%',
      height: '550px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }
  displayedColumns: String[] = [
    'vendor_id',
    'vendor_name',
    'address',
    'phone',
    'pan_no',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getdata() {
    this.http.getvendor().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data.rows);
      this.dataSource.paginator = this.paginator;
    });
  }
}
@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrl: './vendor.component.css',
})
export class AddvendorComponent {
  form: any;
  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AddvendorComponent>
  ) {
    this.myform();
  }
  myform() {
    this.form = this.formbuilder.group({
      vendor_id: ['', Validators.required],
      vendor_name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      pan_no: ['', Validators.required],
    });
  }
  submitForm() {
    this.http.postvendor(this.form.value).subscribe((data: any) => {
      if (data.success) {
        this.dialogRef.close();
      }
    });
  }
  Close() {
    this.dialogRef.close();
  }
}
