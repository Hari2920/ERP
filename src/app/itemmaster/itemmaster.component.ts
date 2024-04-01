import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-itemmaster',
  templateUrl: './itemmaster.component.html',
  styleUrl: './itemmaster.component.css',
})
export class ItemmasterComponent {
  ItemDetails: any = [];
  dataSource: any;
  open: boolean = false;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getdata() {
    this.http.getItem().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data.rows);
      this.dataSource.paginator = this.paginator;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '50%',
      height: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }

  displayedColumns: String[] = [
    'item_code',
    'item_name',
    'iteam_type',
    'price',
    'current_discount',
    'uom',
  ];

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
}
@Component({
  selector: 'app-additem',
  templateUrl: './add-item.component.html',
  styleUrl: './itemmaster.component.css',
})
export class AddItemComponent {
  form: any;
  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AddItemComponent>
  ) {
    this.myform();
  }
  myform() {
    this.form = this.formbuilder.group({
      item_code: ['', Validators.required],
      item_name: ['', Validators.required],
      iteam_type: ['', Validators.required],
      price: ['', Validators.required],
      current_discount: ['', Validators.required],
      uom: ['', Validators.required],
    });
  }
  submitForm() {
    const obj = this.form.value;
    console.log(obj);
    this.http.postItem(obj).subscribe((data: any) => {
      if (data.success) {
        this.dialogRef.close();
      }
    });
  }
  Close() {
    this.dialogRef.close();
  }
}
