import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrl: './purchase-order.component.css',
})
export class PurchaseOrderComponent {
  details = JSON.parse(localStorage.getItem('loginInfo') || '{}');
  isManager = this.details.role == 'Manager ACC';

  plants: any;
  dataSource: any;
  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddpurchaseorderComponent, {
      width: '50%',
      height: '450px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }
  openDialog1(): void {
    const dialogRef = this.dialog.open(LineItemsComponent, {
      width: '80%',
      height: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }

  getdata() {
    const obj = { role: this.details.role, user_id: this.details.user_id };
    this.http.getpurchase(obj).subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.rows);
    });
  }
  displayedColumns: any[] = [
    'po_number',
    'po_date',
    'vendor_name',
    'required_date',
    'plant_name',
    'username',
    'actions',
    'action',
  ];
  displayed: any[] = [
    'po_number',
    'item_name',
    'iteam_type',
    'quantity',
    'current_discount',
    'uom',
    'status',
  ];
  source: any;
  add(event: any) {
    const obj = { po_number: event };
    this.http.getLineItems(obj).subscribe((data: any) => {
      this.source = data.rows;
      console.log(data);
    });
  }
}
@Component({
  selector: 'app-addpurchaseorder',
  templateUrl: './addpurchaseorder.component.html',
  styleUrl: './purchase-order.component.css',
})
export class AddpurchaseorderComponent {
  form: any;
  vendor: any;
  plant: any;
  user: any;
  details = JSON.parse(localStorage.getItem('loginInfo') || '{}');
  // console.log(this.details);
  constructor(
    public formbuilder: FormBuilder,
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AddpurchaseorderComponent>
  ) {
    this.myform();
    this.getvendor();
    this.getplant();
    //this.getuser();
  }
  myform() {
    this.form = this.formbuilder.group({
      vendor_id: ['', Validators.required],
      required_date: ['', Validators.required],
      plant_id: ['', Validators.required],

      user_id: [this.details.user_id],
    });
  }
  getvendor() {
    this.http.getvendor().subscribe((data: any) => {
      console.log(data);
      this.vendor = data.rows;
    });
  }
  getplant() {
    this.http.getplant().subscribe((data: any) => {
      console.log(data);
      this.plant = data.rows;
    });
  }
  submitForm() {
    console.log(this.details);
    const obj = this.form.value;
    console.log(obj);
    this.http.postpurchase(obj).subscribe((data: any) => {
      if (data.success) {
        this.dialogRef.close();
      }
    });
  }
  Close() {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-line-items',
  templateUrl: './line-items.component.html',
  styleUrl: './purchase-order.component.css',
})
export class LineItemsComponent {
  details = JSON.parse(localStorage.getItem('loginInfo') || '{}');
  isManager = this.details.role == 'Manager ACC';

  form: any;
  lineitems: any;
  purchase: any;
  item: any;
  dataSource: any = [];
  constructor(
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<AddpurchaseorderComponent>,
    public formbuilder: FormBuilder
  ) {
    this.myform();
    this.getpurchase();
    this.getItems();
  }
  getpurchase() {
    this.http.getGrnPurchase().subscribe((data: any) => {
      this.purchase = data.rows;
    });
  }
  getItems() {
    this.http.getItem().subscribe((data: any) => {
      this.item = data.rows;
    });
  }
  myform() {
    this.form = this.formbuilder.group({
      po_number: ['', Validators.required],
      item_code: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }
  // add(po_number: any) {
  //   const obj = { po_number };
  //   this.http.getLineItems(obj).subscribe((data: any) => {});
  // }
  displayedColumns: string[] = ['item_name', 'quantity'];
  save() {
    const { po_number, item_code, quantity } = this.form.value;
    console.log(this.form.value);
    if (!po_number || !item_code || !quantity) return;
    this.dataSource.push(this.form.value);
    this.dataSource = [...this.dataSource];
  }
  submit(event: any) {
    this.http.addLineItems(this.dataSource).subscribe((data: any) => {
      console.log(data);

      this.dialogRef.close();
    });
  }
}
