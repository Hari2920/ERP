import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErpserviceService } from '../_services/erpservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grn',
  templateUrl: './grn.component.html',
  styleUrl: './grn.component.css',
})
export class GrnComponent {
  details = JSON.parse(localStorage.getItem('loginInfo') || '{}');

  dataSource: any;
  source: any;

  constructor(public dialog: MatDialog, private http: ErpserviceService) {
    this.getdata();
  }
  openGRN(): void {
    const dialogRef = this.dialog.open(AddgrnComponent, {
      width: '60%',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }
  openGRNLine(): void {
    const dialogRef = this.dialog.open(GrnlineitemComponent, {
      width: '80%',
      height: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdata();
    });
  }

  getdata() {
    const obj = { role: this.details.role, created_by: this.details.user_id };
    this.http.getgrn(obj).subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.rows);
    });
  }

  displayedColumns: any[] = [
    'grn_id',
    'po_number',
    'supplied_on',
    'vendor_name',
    'plant_name',
    'store_name',
    'gatepass',
    'actions',
  ];
  displayed: any[] = [
    'gl_id',
    'grn_id',
    'l_id',
    'quantity',
    'quantity_supplied',
    //'status',
  ];

  addTo(event: any) {
    const obj = { grn_id: event };
    this.http.getgrndetails(obj).subscribe((data: any) => {
      this.source = data.rows;
      console.log(data);
    });
  }
}
@Component({
  selector: 'app-addgrn',
  templateUrl: './addgrn.component.html',
  styleUrl: './grn.component.css',
})
export class AddgrnComponent {
  details = JSON.parse(localStorage.getItem('loginInfo') || '{}');
  isManager = this.details.role == 'Manager ACC';
  allgoods: any = [];
  allitems: any = [];
  puchase: any;
  form: any;
  constructor(
    public formbuilder: FormBuilder,
    public dialog: MatDialogRef<AddgrnComponent>,
    private http: ErpserviceService
  ) {
    this.myform();
    this.getgoods();
  }
  getgoods() {
    //const obj = { role: this.details.role, user_id: this.details.user_id };

    this.http.getGrnPurchase().subscribe((data: any) => {
      this.allgoods = data.rows;
      console.log(this.allgoods);
    });
  }
  onChanges(event: any) {
    const obj = { po_number: event.value };
    console.log(obj);
    this.http.getdetails(obj).subscribe((data: any) => {
      console.log(data);
      this.allitems = data.rows;
      console.log(this.allitems);
    });
  }
  myform() {
    this.form = this.formbuilder.group({
      po_number: ['', Validators.required],
      vendor_id: ['', Validators.required],
      store_id: ['', Validators.required],
      supplied_on: ['', Validators.required],
      gatepass: ['', Validators.required],
    });
  }
  submitForm() {
    const obj = this.form.value;
    this.http.postgrn(obj).subscribe((data: any) => {
      this.dialog.close();
    });
    console.log(obj);
  }
}

@Component({
  selector: 'app-grnlineitem',
  templateUrl: './grnlineitem.component.html',
  styleUrl: './grn.component.css',
})
export class GrnlineitemComponent {
  form: any;
  grnlineitems: any;
  alldetail: any;
  allitem: any;
  hi: any;
  dataSource: any = [];
  constructor(
    public http: ErpserviceService,
    public dialogRef: MatDialogRef<GrnlineitemComponent>,
    public formbuilder: FormBuilder,
    public snack: MatSnackBar
  ) {
    this.myform();
    // this.getpurchase();his.getgrn();
    this.getGrn();
  }
  myform() {
    this.form = this.formbuilder.group(
      {
        grn_id: ['', Validators.required],
        item_code: ['', Validators.required],
        quantity: ['', Validators.required],
        quantity_supplied: ['', Validators.required],
        l_id: ['', Validators.required],
      },
      { Validators: this.ValidateQuantity }
    );
  }
  ValidateQuantity(form: FormGroup) {
    const selectedquantity = form.get('quantity');
    console.log(selectedquantity);
    const input = form.get('quantity_supplied');
  }
  change(event: any) {
    const obj = (event.target as HTMLInputElement).value;
    if (obj <= this.alldetail[0].quantity) {
      this.hi = false;
    } else {
      this.hi = true;
      this.snack.open('OOPS , Quantity exceeds', 'ok'),
        {
          duration: 1000,
        };
    }
  }

  getGrn() {
    this.http.getgrnID().subscribe((data: any) => {
      this.allitem = data.rows;
    });
  }

  onChanges(event: any) {
    const obj = { grn_id: event.value };
    console.log(obj);
    this.http.getAllDetails(obj).subscribe((data: any) => {
      console.log(data);
      this.alldetail = data.rows;
      console.log(this.alldetail);
    });
  }
  displayedColumns: string[] = ['grn_id', 'quantity', 'l_id'];

  add() {
    const { grn_id, quantity, l_id, quantity_supplied } = this.form.value;
    console.log(this.form.value);
    if (!grn_id || !quantity || !l_id || !quantity_supplied) return;
    this.dataSource.push(this.form.value);
    this.dataSource = [...this.dataSource];
  }
  submit(event: any) {
    this.http.postGrnLine(this.dataSource).subscribe((data: any) => {
      console.log(data);
      this.dialogRef.close();
    });
  }
}
