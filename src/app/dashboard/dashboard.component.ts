import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../api/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';
import { ProductModel } from '../api/ProductModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None, overide ค่าที่ถูก Encapsulationด้วย css
})
export class DashboardComponent implements OnInit {
  products: any;

  constructor(
    public productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data: {}) => {
      // console.log(data);
      this.products = data;
    });
  }

  openDialog() {
    this.dialog
      .open(DialogProductComponent, {
        width: '950px',
      })
      .afterClosed()
      .subscribe((data: {}) => {
        // console.log(data);
        this.ngOnInit();
      });
  }

  handleEditClicked(id) {
    const _product: ProductModel = this.products.find((e) => e.id == id);

    this.dialog
      .open(DialogProductComponent, {
        data: {
          name: _product.name,
          price: _product.price,
        },
        width: '950px',
      })
      .afterClosed()
      .subscribe((data: {}) => {
        // console.log(data);
        this.ngOnInit();
      });
  }

  handleRemoveClicked(id) {
    this.productService.remove(id).subscribe((data: {}) => {
      // console.log(data);
    });
    this.products = this.products.filter((e) => e.id != id);
  }
}
