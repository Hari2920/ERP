import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErpserviceService {
  url = 'http://localhost:8989/';

  constructor(private http: HttpClient) {}
  getdepartment() {
    return this.http.get(this.url + 'department/getdepartment');
  }
  getroles() {
    return this.http.get(this.url + 'role/getroles');
  }
  postrole(data: any) {
    return this.http.post(this.url + 'role/insertroles', data);
  }

  postdepartment(data: any) {
    return this.http.post(this.url + 'department/insertdepartment', data);
  }
  getuser() {
    return this.http.get(this.url + 'erp/getuser');
  }
  getplant() {
    return this.http.get(this.url + 'plant/getplant');
  }
  postplant(data: any) {
    return this.http.post(this.url + 'plant/insertplant', data);
  }
  getstore() {
    return this.http.get(this.url + 'store/getstore');
  }
  poststore(data: any) {
    return this.http.post(this.url + 'store/insertstore', data);
  }
  getrolefordepartment(data: any) {
    return this.http.post(this.url + 'erp/getrolefordepartment', data);
  }
  postuser(data: any) {
    return this.http.post(this.url + 'erp/postuser', data);
  }
  getItem() {
    return this.http.get(this.url + 'item/getItem');
  }
  postItem(data: any) {
    return this.http.post(this.url + 'item/postItem', data);
  }
  getvendor() {
    return this.http.get(this.url + 'vendor/getvendor');
  }
  postvendor(data: any) {
    return this.http.post(this.url + 'vendor/postvendor', data);
  }
  login(data: any) {
    console.log('services', data);
    return this.http.post(this.url + 'auth/login', data);
  }
  getpurchase(data: any) {
    return this.http.post(this.url + 'purchase/getpurchase', data);
  }
  postpurchase(data: any) {
    return this.http.post(this.url + 'purchase/postpurchase', data);
  }
  getLineItems(data: any) {
    return this.http.post(this.url + 'purchase/getLineItems', data);
  }
  addLineItems(data: any) {
    return this.http.post(this.url + 'purchase/addLineItems', data);
  }
  getgrn(data: any) {
    return this.http.post(this.url + 'grn/getgrn', data);
  }
  getGrnPurchase() {
    return this.http.get(this.url + 'grn/getGrnPurchase');
  }
  getdetails(data: any) {
    return this.http.post(this.url + 'grn/getdetails', data);
  }
  postgrn(data: any) {
    return this.http.post(this.url + 'grn/postgrn', data);
  }
  getgrnID() {
    return this.http.get(this.url + 'grn/getgrnID');
  }
  getAllDetails(data: any) {
    return this.http.post(this.url + 'grn/getAllDetails', data);
  }
  postGrnLine(data: any) {
    return this.http.post(this.url + 'grn/postGrnLine', data);
  }
  getgrndetails(data: any) {
    return this.http.post(this.url + 'grn/getgrndetails', data);
  }
  getapplicant() {
    return this.http.get(this.url + 'app/getapplicant');
  }
  postapplicant(data: any) {
    return this.http.post(this.url + 'app/postapplicant', data);
  }
}
