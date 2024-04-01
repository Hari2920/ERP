import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  storeDetails: any;
  dataSource: any;
  open: boolean = false;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddstoreComponent, {
      width: '50%',
      height: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }
  displayedColumns: String[] = ['store_id', 'store_name', 'plant_id'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getdata() {
    this.http.getstore().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data.rows);
      this.dataSource.paginator = this.paginator;
    });
  }
}
@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.component.html',
  styleUrl: './store.component.css',
})
export class AddstoreComponent {
  plant: any;
  form: any;
  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AddstoreComponent>
  ) {
    this.myform();
    this.getplant();
  }
  //fetch plants
  getplant() {
    this.http.getplant().subscribe((data: any) => {
      console.log(data);
      this.plant = data.rows;
    });
  }

  myform() {
    this.form = this.formbuilder.group({
      store_id: ['', Validators.required],
      store_name: ['', Validators.required],
      plant_id: ['', Validators.required],
    });
  }
  SubmitForm() {
    const obj = this.form.value;
    console.log(obj);
    this.http.poststore(obj).subscribe((data: any) => {
      if (data.success) {
        this.dialogRef.close();
      }
    });
  }
  Close() {
    this.dialogRef.close();
  }
}
